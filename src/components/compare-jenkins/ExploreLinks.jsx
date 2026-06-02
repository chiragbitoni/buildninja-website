import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import s from './ExploreLinks.module.css';

export default function ExploreLinks() {
  const links = [
    { title: 'BuildNinja vs GitHub Actions', href: '/compare/buildninja-vs-github-actions' },
    { title: 'BuildNinja vs GitLab CI', href: '#' },
    { title: 'BuildNinja vs CircleCI', href: '/compare/buildninja-vs-circleci' },
    { title: 'BuildNinja vs TeamCity', href: '#' },
    { title: 'BuildNinja vs Harness', href: '#' },
    { title: 'All CI/CD Comparisons', href: '#' }
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.sectionLabel}>Also Compare</div>
        <h2 className={s.sectionTitle}>Other Comparison Pages</h2>
        <p className={s.sectionDesc}>
          Evaluating multiple options? See how BuildNinja stacks up against other leading CI/CD platforms.
        </p>
        <div className={s.relatedGrid}>
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className={s.relatedCard}>
              <span>{link.title}</span>
              <ArrowRight size={16} className={s.arrow} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
