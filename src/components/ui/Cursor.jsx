'use client';

import Script from 'next/script';

// Cursor is implemented as a pure vanilla JS injection to avoid React hydration
// delays which can cause the cursor to "miss" on initial page load.
export default function Cursor() {
  const cursorScript = `
    (function() {
      if (typeof window === 'undefined') return;
      if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
      if (document.getElementById('bn-cursor-dot')) return;

      // Inject cursor element styles only (NO cursor:none yet — use native as fallback)
      var style = document.createElement('style');
      style.textContent = [
        '#bn-cursor-dot {',
        '  position: fixed; width: 6px; height: 6px;',
        '  border-radius: 50%; background: var(--color-primary);',
        '  transform: translate(-50%, -50%);',
        '  pointer-events: none; z-index: 10001;',
        '  transition: opacity 0.3s ease;',
        '}',
        '#bn-cursor-ring {',
        '  position: fixed; width: 32px; height: 32px;',
        '  border-radius: 50%; border: 1.5px solid var(--color-primary);',
        '  transform: translate(-50%, -50%) scale(1);',
        '  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;',
        '  pointer-events: none; z-index: 10000;',
        '  background: transparent;',
        '}'
      ].join('');
      document.head.appendChild(style);

      // Create elements
      var dot = document.createElement('div');
      dot.id = 'bn-cursor-dot';
      var ring = document.createElement('div');
      ring.id = 'bn-cursor-ring';
      document.body.appendChild(ring);
      document.body.appendChild(dot);

      var mouse = { x: -100, y: -100 };
      var ringPos = { x: -100, y: -100 };
      var nativeCursorHidden = false;

      function hidNativeCursor() {
        if (nativeCursorHidden) return;
        nativeCursorHidden = true;
        // Only hide the native cursor once we've confirmed the custom one is tracking
        var hideStyle = document.createElement('style');
        hideStyle.id = 'bn-cursor-hide';
        hideStyle.textContent = 'body, a, button, [data-cursor-grow], .badge, .badge-alt, [role="button"] { cursor: none !important; }';
        document.head.appendChild(hideStyle);
      }

      function onMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        dot.style.left = mouse.x + 'px';
        dot.style.top = mouse.y + 'px';

        // Confirm cursor is working, then hide native
        hidNativeCursor();

        var t = e.target;
        var hoverable = t.closest('a, button, .badge, [data-cursor-grow]');
        if (hoverable) {
          ring.style.transform = 'translate(-50%, -50%) scale(1.7)';
          ring.style.background = 'var(--color-primary-subtle)';
        } else {
          ring.style.transform = 'translate(-50%, -50%) scale(1)';
          ring.style.background = 'transparent';
        }
      }

      function animate() {
        ringPos.x += (mouse.x - ringPos.x) * 0.15;
        ringPos.y += (mouse.y - ringPos.y) * 0.15;
        ring.style.left = ringPos.x + 'px';
        ring.style.top = ringPos.y + 'px';
        requestAnimationFrame(animate);
      }

      window.addEventListener('mousemove', onMove, { passive: true });
      requestAnimationFrame(animate);
    })();
  `;

  return (
    <Script
      id="bn-cursor"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: cursorScript }}
    />
  );
}