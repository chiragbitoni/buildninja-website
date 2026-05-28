import React from 'react';
import s from './SnapshotStats.module.css';

export default function SnapshotStats() {
  return (
    <div className={s.snapshot} aria-label="Head-to-head metric snapshot">
      <div className={s.snapshotInner}>
        <div className={s.snapshotGrid}>
          <div className={s.snapCard}>
            <div className={`${s.snapVal} ${s.snapValBn}`}>Unlimited</div>
            <div className={s.snapLbl}>BuildNinja free builds/mo</div>
            <small>No credit system</small>
          </div>
          <div className={s.snapCard}>
            <div className={`${s.snapVal} ${s.snapValCi}`}>~300 min</div>
            <div className={s.snapLbl}>CircleCI free builds/mo</div>
            <small>6,000 credits @ ~20 cr/min</small>
          </div>
          <div className={s.snapCard}>
            <div className={`${s.snapVal} ${s.snapValBn}`}>$0</div>
            <div className={s.snapLbl}>BuildNinja per-seat cost</div>
            <small>Flat infra cost only</small>
          </div>
          <div className={s.snapCard}>
            <div className={`${s.snapVal} ${s.snapValCi}`}>$15+/user</div>
            <div className={s.snapLbl}>CircleCI at scale</div>
            <small>Credit usage + seat tiers</small>
          </div>
          <div className={s.snapCard}>
            <div className={`${s.snapVal} ${s.snapValBn}`}>5 min</div>
            <div className={s.snapLbl}>BuildNinja setup time</div>
            <small>1 Docker command</small>
          </div>
          <div className={s.snapCard}>
            <div className={`${s.snapVal} ${s.snapValCi}`}>15–30 min</div>
            <div className={s.snapLbl}>CircleCI setup time</div>
            <small>OAuth + project config + orbs</small>
          </div>
        </div>
      </div>
    </div>
  );
}
