
'use client';
import { SiteLink } from './site-context';

import { useId, useState, type ReactNode } from 'react';
import { Activity, ArrowUpRight, Check, ChevronRight, FileCode2, FolderGit2, GitBranch, GitCommitHorizontal, LayoutDashboard, Search, Server, Settings, ShieldCheck, Users } from 'lucide-react';

type PreviewKind = 'dashboard-overview' | 'project-members' | 'project-changes';
type PreviewProps = { compact?: boolean };

function PreviewFrame({ kind, children, compact = false }: PreviewProps & { kind: PreviewKind; children: ReactNode }) {
  const locations = {
    'dashboard-overview': ['Workspace', 'Dashboard'],
    'project-members': ['storefront-api', 'Members'],
    'project-changes': ['Build #248', 'Git changes'],
  };
  const active = kind === 'dashboard-overview' ? 0 : kind === 'project-members' ? 3 : 1;
  return <div className={`feature-preview fp-${kind}${compact ? ' fp-compact' : ''}`}>
    <div className="fp-window-bar">
      <span className="fp-brand"><img src="/brand/buildninja-mark.svg" width="22" height="24" alt=""/>BuildNinja</span>
      <span className="fp-sample"><i/>Interactive sample</span>
    </div>
    <div className="fp-shell">
      <div className="fp-rail" aria-hidden="true">
        {[LayoutDashboard, FolderGit2, Server, Users].map((Icon, i) => <span className={i === active ? 'is-active' : ''} key={i}><Icon size={16}/></span>)}
        <span className="fp-rail-settings"><Settings size={16}/></span>
      </div>
      <div className="fp-workspace">
        <div className="fp-breadcrumb"><span>{locations[kind][0]}</span><ChevronRight size={12}/><b>{locations[kind][1]}</b></div>
        {children}
      </div>
    </div>
  </div>;
}

const dashboardRanges = {
  day: { success: 92, duration: '3m 12s', utilization: 42, bars: [100, 80, 100, 80, 100], agents: [68, 44, 39, 17], trend: [44, 50, 47, 30, 37] },
  week: { success: 88, duration: '3m 46s', utilization: 56, bars: [100, 80, 90, 70, 100], agents: [76, 61, 52, 35], trend: [63, 44, 52, 37, 31] },
};

function DashboardPreview({ compact }: PreviewProps) {
  const [range, setRange] = useState<'day' | 'week'>('day');
  const data = dashboardRanges[range];
  const gradientId = useId().replace(/:/g, '');
  const points = data.trend.map((y, i) => `${12 + i * 42},${y}`).join(' ');
  return <PreviewFrame kind="dashboard-overview" compact={compact}>
    <div className="fp-overview-header"><div><b>Build overview</b><span>A little context for your next build.</span></div>
      <label className="fp-range"><Activity size={12}/><select aria-label="Sample dashboard time range" value={range} onChange={e => setRange(e.target.value as 'day' | 'week')}><option value="day">Last 24 hours</option><option value="week">Last 7 days</option></select></label>
    </div>
    <div className="fp-chart-grid">
      <div className="fp-chart-card">
        <span className="fp-card-label">Configuration success</span>
        <div className="fp-metric"><strong>{data.success}<small>%</small></strong><span>Average success rate</span></div>
        <div className="fp-bars" role="img" aria-label={`Success rates: ${['Docs', 'API', 'Web', 'Nightly', 'Package'].map((name, i) => `${name} ${data.bars[i]}%`).join(', ')}`}>
          {data.bars.map((value, i) => <div className="fp-bar-column" key={i}><div className="fp-bar-track"><i className={value < 90 ? 'fp-bar-warn' : ''} style={{ height: `${value}%` }}/></div><span>{['Docs', 'API', 'Web', 'Nightly', 'Pkg'][i]}</span></div>)}
        </div>
        <div className="fp-chart-foot"><i/>5 build configurations</div>
      </div>
      <div className="fp-chart-card">
        <span className="fp-card-label">Top 5 build history</span>
        <div className="fp-metric"><strong>{data.duration}</strong><span>Average build duration</span></div>
        <div className="fp-trend" role="img" aria-label="Build-duration trend for the five most recent storefront-api builds">
          <svg viewBox="0 0 192 96" aria-hidden="true">
            <defs><linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="currentColor" stopOpacity=".17"/><stop offset="100%" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs>
            {[22, 49, 76].map(y => <line key={y} x1="6" x2="186" y1={y} y2={y} className="fp-chart-gridline"/>)}
            <polygon points={`12,84 ${points} 180,84`} fill={`url(#${gradientId})`}/>
            <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            {data.trend.map((y, i) => <circle key={i} cx={12 + i * 42} cy={y} r="3.2" fill="var(--surface)" stroke="currentColor" strokeWidth="2"/>)}
          </svg>
          <div className="fp-trend-labels">{[244, 245, 246, 247, 248].map(x => <span key={x}>#{x}</span>)}</div>
        </div>
        <div className="fp-chart-foot fp-coral-dot"><i/>storefront-api</div>
      </div>
      <div className="fp-chart-card fp-agents-card">
        <span className="fp-card-label">Agent utilization</span>
        <div className="fp-metric"><strong>{data.utilization}<small>%</small></strong><span>Overall utilization</span></div>
        <div className="fp-agent-tiles">{['Linux · 01', 'Windows · 01', 'Linux · 02', 'macOS · 01'].map((name, i) => <div key={name}><span>{name}</span><b>{data.agents[i]}<small>%</small></b></div>)}</div>
        <div className="fp-chart-foot"><i/>4 connected agents</div>
      </div>
    </div>
    <div className="fp-recent-builds">
      <div className="fp-panel-heading"><b>Recent builds</b><span>Latest runs</span></div>
      <div className="fp-build-row fp-build-labels"><span>Build</span><span>Configuration</span><span>Status</span><span>Duration</span></div>
      {[['#248', 'API_release', 'Completed', '3m 12s'], ['#15', 'Doc_build', 'Failed', '2s'], ...(!compact ? [['#816', 'Web_app', 'Completed', '4m 08s']] : [])].map(row => <div className="fp-build-row" key={row[0]}><span>{row[0]}</span><b>{row[1]}</b><span className={`fp-build-status ${row[2] === 'Failed' ? 'is-failed' : ''}`}>{row[2] === 'Failed' ? <i/> : <Check size={10}/>}<span>{row[2]}</span></span><span>{row[3]}</span></div>)}
    </div>
    <div className="fp-preview-foot"><span>Illustrative workspace data</span><SiteLink href="/#product-demo">Explore the dashboard<ArrowUpRight size={12}/></SiteLink></div>
  </PreviewFrame>;
}

const members = [
  { name: 'Alex Morgan', initials: 'AM', role: 'Manager', origin: 'This project', description: 'Manage project access, projects, and configurations.', color: 'sage' },
  { name: 'Sam Rivera', initials: 'SR', role: 'Editor', origin: 'This project', description: 'Create and update projects and build configurations.', color: 'coral' },
  { name: 'Jordan Lee', initials: 'JL', role: 'Viewer', origin: 'Parent project', description: 'View subprojects, build results, and history.', color: 'slate' },
];

function MembersPreview({ compact }: PreviewProps) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('Alex Morgan');
  const filtered = members.filter(member => `${member.name} ${member.role}`.toLowerCase().includes(query.toLowerCase()));
  const active = members.find(member => member.name === selected)!;
  return <PreviewFrame kind="project-members" compact={compact}>
    <div className="fp-members-header"><span className="fp-section-icon"><Users size={18}/></span><div><b>Project members</b><span>The right access for every teammate.</span></div><span className="fp-count">03</span></div>
    <label className="fp-member-search"><Search size={14}/><input aria-label="Search sample project members" placeholder="Find a person or role…" value={query} onChange={event => setQuery(event.target.value)}/><span aria-live="polite">{filtered.length}</span></label>
    <div className="fp-member-labels"><span>Member</span><span>Project role</span></div>
    <div className="fp-member-list" aria-label="Sample project members">
      {filtered.map(member => <button type="button" key={member.name} className={`fp-member-row ${selected === member.name ? 'is-selected' : ''}`} aria-pressed={selected === member.name} onClick={() => setSelected(member.name)}>
        <span className={`fp-avatar fp-avatar-${member.color}`}>{member.initials}</span><span className="fp-member-name"><b>{member.name}</b><small>{member.origin}</small></span><span className="fp-role">{member.role}</span><ChevronRight size={12}/>
      </button>)}
      {!filtered.length && <div className="fp-empty">No matching members. Try a name or role.</div>}
    </div>
    <div className="fp-access-note" aria-live="polite"><ShieldCheck size={16}/><div><b>{active.role} access</b><span>{active.description}</span></div></div>
  </PreviewFrame>;
}

const commits = [
  { hash: 'a7c91f2', title: 'Restore the missing import', author: 'Alex', branch: 'main', files: ['src/Program.cs'], plus: 1, minus: 0, detail: 'Adds the namespace required by the application startup code.' },
  { hash: 'e42b8d0', title: 'Update the build configuration', author: 'Sam', branch: 'build/config', files: ['build/config.json', 'build/README.md'], plus: 12, minus: 4, detail: 'Updates the build command and its accompanying documentation.' },
  { hash: '3fb06e1', title: 'Add checkout tests', author: 'Jordan', branch: 'main', files: ['tests/CheckoutTests.cs'], plus: 28, minus: 2, detail: 'Adds test cases for the checkout workflow.' },
];

function ChangesPreview({ compact }: PreviewProps) {
  const [selected, setSelected] = useState(0);
  const active = commits[selected];
  return <PreviewFrame kind="project-changes" compact={compact}>
    <div className="fp-changes-header"><div><span className="fp-section-icon"><GitBranch size={18}/></span><b>storefront-api</b></div><span className="fp-branch"><GitBranch size={11}/>main</span></div>
    <div className="fp-repo-summary"><span>Changes in build #248</span><b>3 commits</b></div>
    <div className="fp-commit-list">
      <svg className="fp-commit-graph" viewBox="0 0 32 180" aria-hidden="true"><path d="M10 0V180"/><path className="fp-branch-path" d="M10 30C10 50 25 50 25 72V101C25 122 10 126 10 150"/>{[30, 90, 150].map((y, i) => <circle key={y} cx={i === 1 ? 25 : 10} cy={y} r={i === selected ? 4.5 : 3} className={i === selected ? 'is-selected' : ''}/>)}</svg>
      {commits.map((commit, i) => <button type="button" className={`fp-commit ${i === selected ? 'is-selected' : ''}`} key={commit.hash} onClick={() => setSelected(i)} aria-pressed={i === selected}><span><b>{commit.title}</b><small>{commit.author}<i/> <code>{commit.hash}</code></small></span><ChevronRight size={13}/></button>)}
    </div>
    <div className="fp-commit-detail" aria-live="polite">
      <div className="fp-file-heading"><span><FileCode2 size={13}/>{active.files.length} changed {active.files.length === 1 ? 'file' : 'files'}</span><span className="fp-diff-count"><b>+{active.plus}</b><em>−{active.minus}</em></span></div>
      <div className="fp-changed-files">{active.files.map(file => <code key={file}>{file}</code>)}</div>
      <span className="fp-change-description">{active.detail}</span>
    </div>
    <div className="fp-changes-foot"><GitCommitHorizontal size={13}/><span>Select a commit to inspect its changes.</span></div>
  </PreviewFrame>;
}

export function FeatureProductPreview({ kind, compact = false }: PreviewProps & { kind: PreviewKind }) {
  if (kind === 'dashboard-overview') return <DashboardPreview compact={compact}/>;
  if (kind === 'project-members') return <MembersPreview compact={compact}/>;
  return <ChangesPreview compact={compact}/>;
}
