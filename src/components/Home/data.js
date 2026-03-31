// Generic data — no real usernames or project names

export const BUILDS = [
  { id:'#3800', config:'Frontend CI',     status:'Completed', trigger:'15 min Ago', completed:'15 min Ago', duration:'<1 second' },
  { id:'#3799', config:'Frontend CI',     status:'Completed', trigger:'1 hr Ago',   completed:'1 hr Ago',   duration:'<1 second' },
  { id:'#3798', config:'Frontend CI',     status:'Completed', trigger:'2 hrs Ago',  completed:'2 hrs Ago',  duration:'<1 second' },
  { id:'#3797', config:'Frontend CI',     status:'Completed', trigger:'3 hrs Ago',  completed:'3 hrs Ago',  duration:'<1 second' },
  { id:'#3796', config:'E2E Test Suite',  status:'Failed',    trigger:'4 hrs Ago',  completed:'4 hrs Ago',  duration:'1m 22s'    },
  { id:'#3795', config:'Backend Build',   status:'Running',   trigger:'5 hrs Ago',  completed:'—',          duration:'2m 10s…'   },
  { id:'#3794', config:'Docs Build',      status:'Failed',    trigger:'6 hrs Ago',  completed:'6 hrs Ago',  duration:'0m 08s'    },
  { id:'#3793', config:'Backend Build',   status:'Completed', trigger:'8 hrs Ago',  completed:'8 hrs Ago',  duration:'4m 31s'    },
];

export const SUCCESS_CONFIGS = [
  { name:'Alpha', pct:98 }, { name:'Beta', pct:75 }, { name:'Gamma', pct:33 },
  { name:'Delta', pct:100 }, { name:'Epsilon', pct:96 }, { name:'Zeta', pct:100 },
];

export const TOP5_CONFIGS = [
  { name: 'Config-A', color: '#d8305b', points: [108, 105, 80, 40, 30, 22] },
  { name: 'Config-B', color: '#40a9ff', points: [100, 95, 98, 90, 85, 88] },
  { name: 'Config-C', color: '#00c951', points: [30, 35, 32, 28, 25, 20] },
  { name: 'Config-D', color: '#faad14', points: [110, 108, 105, 102, 100, 98] },
  { name: 'Config-E', color: '#fa54aa', points: [60, 65, 55, 62, 58, 60] },
];


export const AGENT_TREEMAP = [
  { name:'agent-7dd6d', pct:60, builds:'157 builds', runtime:'2d 4h/30d', color:'#2a6e2a' },
  { name:'agent-c06f2', pct:30, builds:'43 builds',  runtime:'1d 5h/30d', color:'#1a5c3a' },
  { name:'agent-1104',  pct:10, builds:'12 builds',  runtime:'4h/30d',    color:'#1a4a2a' },
];



export const AGENTS = [
  { id:'win-1',   name:'windows-ninja-1', os:'Windows', osVer:'Windows Server 2022', status:'Idle', authorized:true, lastActive:'12/03/2026, 10:20:46', apiUrl:'http://10.64.1.200:8800', runningBuild:null, version:'0.1.0_nightly', dataDir:'C:/app/data' },
  { id:'lin-1',   name:'linux-ninja-1',   os:'Linux',   osVer:'Ubuntu 22.04 LTS',      status:'Busy', authorized:true, lastActive:'12/03/2026, 10:20:50', apiUrl:'http://10.64.1.190:8800', runningBuild:'Build #3800', version:'0.1.0_nightly', dataDir:'/app/data' },
  { id:'mac-1',   name:'macos-ninja-1',   os:'macOS',   osVer:'macOS Sonoma 14.2.1',   status:'Idle', authorized:true, lastActive:'12/03/2026, 10:21:10', apiUrl:'http://10.64.1.210:8800', runningBuild:null, version:'0.1.0_nightly', dataDir:'/Users/app/data' },
  { id:'lin-2',   name:'linux-ninja-2',   os:'Linux',   osVer:'Debian 12 (Bookworm)',  status:'Idle', authorized:true, lastActive:'12/03/2026, 10:22:05', apiUrl:'http://10.64.1.191:8800', runningBuild:null, version:'0.1.0_nightly', dataDir:'/app/data' },
];

// Generic project tree
export const SIDEBAR_TREE = {
  pinned: ['BuildNinja-Documentation','QA','Vineyard'],
  projects: [
    { id:'alpha', name:'Alpha', type:'project', children:[
      { id:'alpha-dev', name:'dev', type:'subproject', configs:['Frontend CI'] },
    ], configs:['Docs Build','Main Build','Web Test'] },
    { id:'bn-docs', name:'BuildNinja-Document...', type:'project' },
    { id:'docsite', name:'Doc-Site', type:'project' },
    { id:'docs',    name:'Documentation', type:'project' },
    { id:'docs-stg',name:'Documentation_Staging', type:'project' },
    { id:'howto',   name:'How-To Projects', type:'project' },
    { id:'qa',      name:'QA', type:'project' },
    { id:'vineyard',name:'Vineyard', type:'project' },
    { id:'ninja',   name:'Ninja', type:'project', configs:['Ninja','Scheduler'] },
  ],
};

export const PROJECT = {
  name: 'Alpha',
  subProjects: ['dev'],
  members: [
    { name: 'Alex Morgan', role: 'Manager', inherited: 'Root_Project' },
    { name: 'Jordan Lee', role: 'Developer', inherited: 'Root_Project' },
    { name: 'Sam Chen', role: 'Viewer', inherited: 'Root_Project' },
  ],
  configs: [
    { name:'Docs Build',  lastBuild:'#46',   status:'Failed',    date:'2025-09-18 14:58' },
    { name:'Main Build',  lastBuild:'#6',    status:'Completed', date:'2025-11-08 16:50' },
    { name:'Web Test',    lastBuild:'#1292', status:'Completed', date:'2025-10-16 22:49' },
  ],
};

export const QUEUE_STATS = { readyToRun:0, waitingForAgents:0, agentIssues:1, total:1 };
export const QUEUE_ITEMS = [
  { position:1, config:'DevOps / .NET Build & Test', build:'#1', queuedAgo:'2 days, 15 hours ago', queuedAt:'09 Mar 2026 18:42', status:'No Compatible Agent Available' },
];

export const TRIGGERS = [
  { name:'nightly-trigger',  config:'Alpha / dev / Frontend CI',       schedule:'Custom', detail:'At 2 minutes past the hour',                   tz:'Africa/Addis_Ababa', nextRun:'in 8 minutes',  enabled:true  },
  { name:'weekly',           config:'QA / Main CI',                    schedule:'Custom', detail:'At 04:50 PM, only on Wednesday and Thursday',  tz:'Asia/Calcutta',      nextRun:'in 6 hours',    enabled:true  },
  { name:'nightly-trigger',  config:'Alpha / dev / Frontend CI',       schedule:'Daily',  detail:'At 01:01 AM',                                  tz:'Asia/Calcutta',      nextRun:'in 15 hours',   enabled:true  },
  { name:'test34',           config:'Documentation / Configured Build',schedule:'Daily',  detail:'At 01:01 AM',                                  tz:'Asia/Calcutta',      nextRun:'in 15 hours',   enabled:true  },
  { name:'lastdat',          config:'QA / Main CI',                    schedule:'Custom', detail:'At 05:06 PM, on day 30 and 31 of the month',   tz:'Asia/Calcutta',      nextRun:'in 18 days',    enabled:true  },
  { name:'month',            config:'QA / Main CI',                    schedule:'Custom', detail:'At 15 minutes past the hour, only in July',    tz:'Asia/Calcutta',      nextRun:'in 4 months',   enabled:true  },
  { name:'test',             config:'Alpha / Main Build',              schedule:'Custom', detail:'Every minute',                                 tz:'Asia/Calcutta',      nextRun:'—',             enabled:false },
  { name:'daily',            config:'QA / Main CI',                    schedule:'Daily',  detail:'At 03:32 PM',                                  tz:'Asia/Calcutta',      nextRun:'—',             enabled:false },
  { name:'4hours',           config:'QA / Main CI',                    schedule:'Custom', detail:'At 0 minutes past the hour, every 4 hours',    tz:'Asia/Calcutta',      nextRun:'—',             enabled:false },
  { name:'every other day',  config:'QA / Main CI',                    schedule:'Custom', detail:'At 25 minutes past the hour, every 2 hours, every 2 days', tz:'Asia/Calcutta', nextRun:'—', enabled:false },
  { name:'2minute',          config:'QA / Source Build',               schedule:'Custom', detail:'Every 4 minutes',                              tz:'Asia/Calcutta',      nextRun:'—',             enabled:false },
];

export const USERS_STATS = { pending:2, total:27 };
export const USERS_PENDING = [
  { name:'alex.morgan', email:'alex.morgan@company.io', date:'27/01/2026, 10:00:10', method:'Non-SSO' },
  { name:'jordan.lee',  email:'jordan.lee@company.io',  date:'22/01/2026, 17:23:08', method:'Non-SSO' },
];
export const USERS_ALL = [
  { name:'admin', email:'admin@company.io', role:'Admin', lastLogin:'Today' },
  { name:'dev1',  email:'dev1@company.io',  role:'Developer', lastLogin:'Yesterday' },
  { name:'dev2',  email:'dev2@company.io',  role:'Developer', lastLogin:'2 days ago' },
];

export const SSO_PROVIDERS = [
  { abbr:'MS', icon:'🪟', name:'MS',        label:'Microsoft', enabled:true,  clientId:'ee79f37a-d0b8-4f13-a3d8-f66cefb1870a', authUrl:'https://login.microsoftonline.com/7f25deda-221b-44f6-89eb-8551818911f0/oauth2/v2.0/authorize' },
  { abbr:'GH', icon:'⚫', name:'github',    label:'github',    enabled:false, clientId:'Ov23liNoreHl26Dse9CH',                  authUrl:'https://github.com/login/oauth/authorize'                          },
  { abbr:'GL', icon:'🦊', name:'Gitlab',    label:'Gitlab',    enabled:false, clientId:'205fb822759b97d3f0df9ca3b42c9ecda909b5091e4a1fdd...', authUrl:'https://gitlab.com/oauth/authorize'  },
  { abbr:'BB', icon:'🪣', name:'Bitbucket', label:'Bitbucket', enabled:true,  clientId:'nzMR7u2cX9aGxUd4rM',                   authUrl:'https://bitbucket.org/site/oauth2/authorize'                       },
  { abbr:'GH', icon:'⚫', name:'Github',    label:'Github',    enabled:false, clientId:'gitID',                                 authUrl:'www.google.com'                                                    },
  { abbr:'GL', icon:'🦊', name:'gitlab',    label:'gitlab',    enabled:false, clientId:'1353d06288d6daff01fc47d533bb6c8e9affc363a3f7efbab...', authUrl:'https://git.developertools.net.in/oauth/authorize' },
  { abbr:'MS', icon:'🪟', name:'Microsoft', label:'Microsoft', enabled:true,  clientId:'ee79f37a-d0b8-4f13-a3d8-f66cefb1870a', authUrl:'https://login.microsoftonline.com/7f25deda-221b-44f6.../'           },
];

export const LICENSE = { status:'Active', plan:'shogun', validUntil:'30/12/2026', remaining:'9 months remaining' };
export const SETTINGS_TABS = ['SSO Settings','Notifier Settings','Mail Templates','Manage License'];
