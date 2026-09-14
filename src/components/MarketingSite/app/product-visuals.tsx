
'use client';

import { ArrowRight, Boxes, Code2, GitBranch, Server, Terminal, Workflow } from 'lucide-react';

export function ToolConnections() {
 return <div className="tool-connections">
  <div className="connection-diagram" role="img" aria-label="GitHub, GitLab, or Bitbucket connect to BuildNinja. Configured steps run on compatible agents and produce build artifacts.">
   <svg className="connection-paths" viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden="true"><g className="connection-lines"><path d="M205 68 H330 Q350 68 350 88 V145 Q350 165 370 165 H500"/><path d="M205 165 H500"/><path d="M205 262 H330 Q350 262 350 242 V185 Q350 165 370 165 H500"/><path d="M500 165 H630 Q650 165 650 145 V88 Q650 68 670 68 H795"/><path d="M500 165 H795"/><path d="M500 165 H630 Q650 165 650 185 V242 Q650 262 670 262 H795"/></g><g className="connection-pulses"><path d="M205 165 H500"/><path d="M500 165 H795"/></g></svg>
   <div className="connection-column connection-inputs">{['GitHub','GitLab','Bitbucket'].map(name=><div className="connection-node" key={name}><GitBranch size={19}/><span>{name}</span></div>)}</div>
   <div className="connection-hub"><span><Workflow size={32}/></span><b>BuildNinja</b><small>Your build workflow</small></div>
   <div className="connection-column connection-outputs">{[{Icon:Terminal,title:'Build steps'},{Icon:Server,title:'Your agents'},{Icon:Boxes,title:'Build artifacts'}].map(({Icon,title})=><div className="connection-node" key={title}><Icon size={19}/><span>{title}</span></div>)}</div>
  </div>
  <div className="connection-legend"><span>YOUR SOURCE</span><span>ONE WORKFLOW</span><span>YOUR ENVIRONMENT</span></div>
  <div className="connection-tools">{[{Icon:Server,title:'Choose your agents',detail:'Windows · Linux · macOS'},{Icon:Terminal,title:'Use your build tools',detail:'Commands · Scripts · SSH'},{Icon:Code2,title:'Build and test .NET',detail:'MSBuild · VSTest'},{Icon:Boxes,title:'Configure deployment steps',detail:'Docker · Kubernetes workflows'},{Icon:Workflow,title:'Connect team sign-in',detail:'Google · Microsoft Entra ID'}].map(({Icon,title,detail})=><div key={title}><Icon size={18}/><b>{title}</b><p>{detail}</p></div>)}</div>
 </div>;
}

export function StackBackdrop() {
 return <div className="stack-backdrop" aria-hidden="true"><div className="stack-ring ring-one"/><div className="stack-ring ring-two"/><div className="stack-ring ring-three"/><span className="stack-token token-one"><GitBranch/></span><span className="stack-token token-two"><Terminal/></span><span className="stack-token token-three"><Server/></span><span className="stack-token token-four"><Code2/></span></div>;
}

export function SetupBadge({step}:{step:string}) {
 const Icon=step==='setup'?Server:step==='connect'?GitBranch:Workflow;
 return <div className="setup-badge"><Icon size={14}/>{step==='setup'?'Your environment':step==='connect'?'Your repository':'Your build output'}<ArrowRight size={12}/></div>;
}
