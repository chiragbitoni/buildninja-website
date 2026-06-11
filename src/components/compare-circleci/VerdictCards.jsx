import React from 'react';
import { DollarSign, Lock, Infinity } from 'lucide-react';
import s from './VerdictCards.module.css';

export default function VerdictCards() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className={s.sectionLabel}>Why Teams Switch from CircleCI</span>
        {/* We use global .section-title and .section-subtitle here */}
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Three reasons BuildNinja wins on structure, not just price
        </h2>
        <p className="section-subtitle" style={{ maxWidth: '580px' }}>
          These aren't feature preferences - they're business model differences CircleCI can't change without dismantling their revenue model.
        </p>

        <div className={s.verdictGrid}>
          <div className={`${s.verdictCard} ${s.verdictCardGreen}`}>
            <div className={`${s.verdictIcon} ${s.verdictIconGreen}`}><Infinity aria-label="Unlimited" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>Truly Unlimited Builds - Not "Generous Limits"</h3>
            <p>
              CircleCI's free tier offers ~6,000 build-minutes/month. A team running 50 builds/day exhausts that in 6 days. BuildNinja's self-hosted model means unlimited builds on your own server with zero per-build costs. CircleCI's credit model is their core revenue mechanism - they structurally cannot offer truly unlimited builds without destroying their business.
            </p>
          </div>
          <div className={`${s.verdictCard} ${s.verdictCardOrange}`}>
            <div className={`${s.verdictIcon} ${s.verdictIconOrange}`}><Lock aria-label="Security" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>Real Self-Hosting - Not "Bring Your Own Kubernetes"</h3>
            <p>
              CircleCI offers a self-hosted "Server" product - but it requires Kubernetes, dedicated infrastructure management, and is gated behind enterprise contracts starting at five figures annually. BuildNinja can be installed on any machine via the installer, or self-hosted with a single <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>docker run</code> command on any server. For regulated industries, air-gapped environments, or cost-conscious teams - there's no real comparison.
            </p>
          </div>
          <div className={`${s.verdictCard} ${s.verdictCardBlue}`}>
            <div className={`${s.verdictIcon} ${s.verdictIconBlue}`}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>No Per-Seat Pricing - Your Bill Stays Flat as You Grow</h3>
            <p>
              BuildNinja puts you in control - from the hardware your builds run on to the network they operate in. Add build agents, configure private networking, and manage your own storage. CircleCI's SaaS model means you're limited to their infrastructure choices and plan constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
