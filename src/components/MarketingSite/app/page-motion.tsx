
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = document.querySelectorAll<HTMLElement>('.marketing-site main > section, .marketing-site main > article, .marketing-site main > .content-sections > section, .marketing-site main > .content-sections > #enquiry, .section > .section-heading, .problem-section, .feature-bento > article, .chapter-panels > article, .comparison-grid > a, .content-section:not(:has(.feature-catalogue)), .final-cta > h2, .cf-reveal, .legal-document-layout > *');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    nodes.forEach((node, i) => {
      if (node.getBoundingClientRect().top < window.innerHeight) return;
      node.classList.add('reveal-pending');
      node.style.setProperty('--reveal-delay', `${(i % 2) * 60}ms`);
      observer.observe(node);
    });
    const diagrams = document.querySelectorAll('.connection-diagram');
    const diagramObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
    }, { threshold:0.15 });
    diagrams.forEach(node => diagramObserver.observe(node));
    return () => {
      observer.disconnect();
      diagramObserver.disconnect();
      nodes.forEach(node => node.classList.remove('reveal-pending', 'is-revealed'));
      diagrams.forEach(node => node.classList.remove('is-in-view'));
    };
  }, [pathname]);
  return null;
}
