'use client';

import { createContext, forwardRef, useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Section.module.css';
import { SectionRule } from './Section';

const SectionMotionContext = createContext({ paused: false, reduced: false, playing: true });

export function useSectionMotion() {
  return useContext(SectionMotionContext);
}

export const AnimatedSection = forwardRef(function AnimatedSection({
  children,
  as: Tag = 'section',
  label = 'Section animation',
  space = 'none',
  padX = false,
  tint = false,
  className = '',
  showRule = true,
  ...props
}, externalRef) {
  const root = useRef(null);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const setRoot = useCallback((node) => {
    root.current = node;
    if (typeof externalRef === 'function') externalRef(node);
    else if (externalRef) externalRef.current = node;
  }, [externalRef]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduced(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setDocumentVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  const paused = manuallyPaused || reduced || !visible || !documentVisible;
  const state = { paused, reduced, playing: !paused };

  return (
    <>
      {showRule ? <SectionRule /> : null}
      <Tag
        {...props}
        ref={setRoot}
        className={[styles.band, 'site-band', className].filter(Boolean).join(' ')}
        data-band-space={space}
        data-band-pad-x={padX || undefined}
        data-band-tint={tint || undefined}
        data-motion-state={paused ? 'paused' : 'playing'}
        data-motion-reduced={reduced || undefined}
      >
        <SectionMotionContext.Provider value={state}>{children}</SectionMotionContext.Provider>
        <button
          className={styles.motionControl}
          type="button"
          disabled={reduced}
          aria-pressed={manuallyPaused}
          aria-label={reduced ? `${label} disabled by reduced-motion preference` : `${manuallyPaused ? 'Play' : 'Pause'} ${label.toLowerCase()}`}
          onClick={() => setManuallyPaused((value) => !value)}
        >
          {reduced ? 'Motion reduced' : manuallyPaused ? 'Play section' : 'Pause section'}
        </button>
      </Tag>
    </>
  );
});
