
'use client';
import { SiteLink } from './site-context';

import { Activity, Bell, Boxes, CalendarClock, ChevronRight, CircleCheck, Clock3, FolderGit2, Gauge, GitBranch, ListChecks, RefreshCw, Search, Server, Settings, ShieldCheck, Users } from 'lucide-react';
import { useState } from 'react';
import { DashboardCharts } from './dashboard-charts';
import { AIReport, DemoAIChat } from './ai-experience';
import { Sparkles, Home, FileText, FileCode2 } from 'lucide-react';

const views=[
 ['Dashboard',Gauge],['Projects',FolderGit2],['Agents',Server],['Queue',ListChecks],['Triggers',CalendarClock],['Users',Users],['Settings',Settings]
] as const;

const agents=[
 ['linux-agent-01','Linux','Busy','storefront-api #248'],
 ['linux-agent-02','Linux','Available','Ready for work'],
 ['windows-agent-01','Windows','Available','.NET build tools'],
 ['mac-agent-01','macOS','Offline','Last seen 2h ago'],
];

function ProjectsPanel(){
 return <><div className="demo-title-row"><div><span>PROJECTS</span><h3>Your build workspace</h3><p>Find a project and its configurations.</p></div><button className="demo-primary">New project</button></div>
 <div className="project-layout"><div className="project-tree"><b>Pinned projects</b>{['storefront-api','desktop-client','documentation'].map((x,i)=><div className={i===0?'active':''} key={x}><FolderGit2 size={14}/>{x}<span>{i+2}</span></div>)}</div><div className="config-list"><div className="card-head"><b>storefront-api</b><span>3 configurations</span></div>{[['Production pipeline','main','Failed'],['Pull request checks','pull/*','Passed'],['Nightly security build','schedule','Passed']].map(x=><div className="config-row" key={x[0]}><span className={x[2]==='Failed'?'config-status failed':'config-status'}>{x[2]==='Failed'?'!':'✓'}</span><div><b>{x[0]}</b><span><GitBranch size={11}/>{x[1]}</span></div><small>{x[2]}</small></div>)}</div></div></>;
}

function AgentsPanel(){
 const [filter,setFilter]=useState('All');const shown=filter==='All'?agents:agents.filter(a=>a[1]===filter);
 return <><div className="demo-title-row"><div><span>AGENTS</span><h3>Build machines</h3><p>Check compatibility and availability.</p></div><button className="demo-primary">Add agent</button></div>
 <div className="filter-row">{['All','Linux','Windows','macOS'].map(x=><button className={x===filter?'active':''} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div>
 <div className="data-list">{shown.map(x=><div key={x[0]}><span className={x[2]==='Offline'?'agent-dot offline':x[2]==='Busy'?'agent-dot busy':'agent-dot'}/><div><b>{x[0]}</b><small>{x[1]} · {x[3]}</small></div><em>{x[2]}</em></div>)}</div></>;
}

function QueuePanel(){
 return <><div className="demo-title-row"><div><span>BUILD QUEUE</span><h3>Two builds are waiting</h3><p>See what is next and why it is waiting.</p></div></div>
 <div className="queue-summary"><div><ListChecks/><span><small>QUEUED</small><strong>2 builds</strong></span></div><div><Clock3/><span><small>OLDEST WAIT</small><strong>4 minutes</strong></span></div></div>
 <div className="data-list"><div><span className="position">01</span><div><b>release-candidate #51</b><small>No compatible agent is currently available</small></div><em>Waiting</em></div><div><span className="position">02</span><div><b>storefront-api #249</b><small>linux-agent-01 is busy</small></div><em>Queued</em></div></div></>;
}

function TriggersPanel(){
 const [query,setQuery]=useState('');const rows=[['Weekly release','Every Friday · 18:00','Enabled'],['Main branch','On every push to main','Enabled'],['Pull request checks','When a pull request opens','Enabled']].filter(x=>x.join(' ').toLowerCase().includes(query.toLowerCase()));
 return <><div className="demo-title-row"><div><span>TRIGGERS</span><h3>When builds begin</h3><p>Find schedules and repository events.</p></div><button className="demo-primary">New trigger</button></div>
 <label className="demo-search"><Search size={14}/><input placeholder="Search triggers" value={query} onChange={e=>setQuery(e.target.value)}/></label>
 <div className="data-list">{rows.map(x=><div key={x[0]}><span className="trigger-icon"><CalendarClock size={14}/></span><div><b>{x[0]}</b><small>{x[1]}</small></div><em className="enabled">{x[2]}</em></div>)}</div></>;
}

function UsersPanel(){
 const [tab,setTab]=useState('Pending approvals');return <><div className="demo-title-row"><div><span>TEAM ACCESS</span><h3>People and permissions</h3><p>Review access to the workspace.</p></div></div>
 <div className="filter-row">{['Pending approvals','Users'].map(x=><button className={x===tab?'active':''} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>
 {tab==='Pending approvals'?<div className="empty-state"><ShieldCheck/><h4>No approvals waiting</h4><p>New requests will appear here.</p></div>:<div className="data-list">{[['Aarav Mehta','Administrator'],['Maya Singh','Developer'],['Noah Williams','Release lead']].map(x=><div key={x[0]}><span className="avatar">{x[0].split(' ').map(v=>v[0]).join('')}</span><div><b>{x[0]}</b><small>{x[1]}</small></div><em>Active</em></div>)}</div>}</>;
}

function SettingsPanel(){
 const [tab,setTab]=useState('Single sign-on');return <><div className="demo-title-row"><div><span>SETTINGS</span><h3>Configure the workspace</h3><p>Keep product settings organized.</p></div></div>
 <div className="filter-row">{['Single sign-on','Notifications','Licensing'].map(x=><button className={x===tab?'active':''} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>
 <div className="setting-cards">{tab==='Single sign-on'?<><div><b>Google</b><small>Connect your workspace identity</small><button>Configure</button></div><div><b>Microsoft Entra ID</b><small>Use your organization account</small><button>Configure</button></div></>:tab==='Notifications'?<><div><b>Build email</b><small>Send useful updates to your team</small><button>Configure</button></div></>:<><div><b>BuildNinja license</b><small>Review edition and activation</small><button>View license</button></div></>}</div></>;
}

export function DashboardDemo(){
 const [view,setView]=useState('Dashboard');
 const [chat,setChat]=useState(false);
 const [resultTab,setResultTab]=useState('AI Analysis');
 return <div className="dashboard-shell native-dashboard refined-dashboard">
   <div className="dashboard-top"><div className="window-dots"><i/><i/><i/></div><span className="preview-window-address"><Activity size={12}/> BuildNinja workspace</span><span className="preview-window-status"><i/>Interactive preview</span></div>
   <div className="dashboard-body"><aside className="native-icon-rail"><SiteLink href="/" className="native-ninja-mark" aria-label="BuildNinja home"><img src="/brand/buildninja-mark.svg" alt="" width="33" height="36"/></SiteLink>{views.map(([name,Icon])=><button type="button" key={name} title={name} aria-label={name} aria-pressed={view===name} className={view===name?'active':''} onClick={()=>{setView(name);setChat(false);}}><Icon size={18}/><span className="native-nav-label">{name}</span>{name==='Queue'?<em>2</em>:null}</button>)}<span className="native-rail-bottom" aria-hidden="true"><span/></span></aside>
   <div className="native-app-body"><div className="native-breadcrumb"><Home size={12}/><span>Home{view==='Build results'?' / Projects / Doc-Site / Doc_build / Build #15':view==='Dashboard'?'':' / '+view}</span><small>Engineering</small><button type="button" onClick={()=>setChat(!chat)} aria-expanded={chat} aria-label="Toggle contextual AI chat"><Sparkles size={14}/><span>Ask AI</span></button></div><div className={'native-app-content'+(chat?' has-ai-chat':'')}><section className="dashboard-main" key={view} aria-label={view}>{view==='Dashboard'?<DashboardCharts onOpenBuild={()=>setView('Build results')}/>:view==='Build results'?<div className="native-build-result"><nav aria-label="Sample build result tabs"><b>Doc_build</b><small>Build #15</small>{['Overview','Execution Logs','Git Changes','Artifacts','AI Analysis'].map(t=><button type="button" key={t} className={t===resultTab?'selected':''} onClick={()=>setResultTab(t)}>{t==='AI Analysis'?<Sparkles size={13}/>:<FileText size={13}/>}<span>{t}</span></button>)}<button type="button" className="back-to-dashboard" onClick={()=>setView('Dashboard')}>← Dashboard</button></nav><div><div className="native-result-heading"><h3>Build #15</h3><p>Failed · 2 seconds</p></div>{resultTab==='AI Analysis'?<AIReport/>:resultTab==='Overview'?<div className="native-analysis"><h4>Doc_build / main</h4><p>Review the build result, execution log, source changes, artifacts, and AI findings in one place.</p><button className="product-button" onClick={()=>setResultTab('AI Analysis')}>Open AI Analysis</button></div>:resultTab==='Git Changes'?<div className="native-analysis"><GitBranch size={18}/><h4>Update HelloWorld page</h4><p>4 changed files · main</p><code>Pages/HelloWorld.cshtml.cs</code></div>:resultTab==='Artifacts'?<div className="native-analysis"><Boxes size={18}/><h4>Build output</h4><p>docs-site.zip · test-results.xml</p></div>:<div className="native-analysis"><FileCode2 size={18}/><h4>Execution log</h4><pre>12:25:04 Checkout completed{'\n'}12:25:05 dotnet build{'\n'}12:25:06 error CS0246: PageModel not found</pre><button type="button" className="product-button" onClick={()=>setChat(true)}>Open AI chat</button></div>}</div></div>:view==='Projects'?<ProjectsPanel/>:view==='Agents'?<AgentsPanel/>:view==='Queue'?<QueuePanel/>:view==='Triggers'?<TriggersPanel/>:view==='Users'?<UsersPanel/>:<SettingsPanel/>}</section>{chat?<DemoAIChat context="Sample Build #15" onClose={()=>setChat(false)}/>:null}</div></div></div>
 </div>;
}
