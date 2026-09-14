'use client';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ArrowUpRight, CalendarDays, Check, Filter, RefreshCw, Server } from 'lucide-react';

const configurations = ['Docs', 'API', 'Web', 'Nightly', 'Package'];
const rates = { day: [100, 75, 100, 50, 100], week: [98, 83, 96, 72, 100], month: [96, 85, 94, 78, 99] };
const rows = [['#15', 'Doc_build', 'Failed', '15 min ago', '14 min ago', '2s'], ['#248', 'API_release', 'Completed', '28 min ago', '25 min ago', '3m 12s'], ['#816', 'Web_app', 'Completed', '42 min ago', '38 min ago', '4m 08s'], ['#124', 'Package', 'Completed', '1 hour ago', '1 hour ago', '52s']];
const history = [{ run: '#11', docs: 1.5, api: 3.4, web: 3.8 }, { run: '#12', docs: 1.2, api: 3.1, web: 3.5 }, { run: '#13', docs: 1.3, api: 3.2, web: 3.6 }, { run: '#14', docs: 1.1, api: 5.8, web: 3.5 }, { run: '#15', docs: 1.4, api: 3.2, web: 4.1 }];
const config = { success: { label: 'Success rate (%)', color: '#75a992' }, docs: { label: 'Docs', color: '#d58475' }, api: { label: 'API', color: '#75a992' }, web: { label: 'Web', color: '#91a5c0' } };
const sampleAgents = [{ name: 'linux-agent-01', value: 68 }, { name: 'windows-agent-01', value: 44 }, { name: 'linux-agent-02', value: 39 }, { name: 'mac-agent-01', value: 17 }];

export function DashboardCharts({ onOpenBuild }: { onOpenBuild: () => void }) {
  const [range, setRange] = useState<keyof typeof rates>('week');
  const [onlyIssues, setOnlyIssues] = useState(false);
  const [auto, setAuto] = useState('0');
  const [refreshed, setRefreshed] = useState('');
  const refresh = () => setRefreshed(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  useEffect(() => { if (auto === '0') return; const timer = setInterval(refresh, Number(auto) * 1000); return () => clearInterval(timer); }, [auto]);
  const data = configurations.map((name, i) => ({ name, success: rates[range][i] })).filter(d => !onlyIssues || d.success < 90);

  return <>
    <div className="preview-dashboard-heading">
      <div><h3>Dashboard</h3><p>A clear view of your build activity.</p></div>
      <div className="native-dashboard-controls">
        <label><CalendarDays size={14} /><select aria-label="Dashboard time range" value={range} onChange={e => setRange(e.target.value as keyof typeof rates)}><option value="day">Last 24 hours</option><option value="week">Last 7 days</option><option value="month">Last 30 days</option></select></label>
        <button type="button" onClick={refresh} title="Refresh sample dashboard" aria-label="Refresh sample dashboard"><RefreshCw size={14} /></button>
      </div>
    </div>
    <div className="native-chart-grid">
      <article className="native-chart-card">
        <div className="native-chart-title"><h4>Configuration success rate</h4><button type="button" onClick={() => setOnlyIssues(!onlyIssues)} aria-pressed={onlyIssues} title={onlyIssues ? 'Show all configurations' : 'Show success rates below 90%'} aria-label="Show configurations with success rate below 90 percent"><Filter size={14} /></button></div>
        <div className="preview-chart-summary"><strong>{Math.round(rates[range].reduce((a, b) => a + b, 0) / 5)}<span>%</span></strong><div><span>Average success rate</span><small>{onlyIssues ? 'Showing below 90%' : 'Across 5 configurations'}</small></div></div>
        <ChartContainer config={config} className="native-rechart"><BarChart data={data} margin={{ left: -24, right: 5, top: 12, bottom: 0 }} accessibilityLayer barCategoryGap="24%"><CartesianGrid vertical={false} strokeDasharray="3 4" /><XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} tickMargin={9} /><YAxis domain={[0, 100]} ticks={[0, 50, 100]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} /><ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: 'var(--soft)' }} /><Bar dataKey="success" radius={[4, 4, 0, 0]} maxBarSize={33} isAnimationActive={false}>{data.map(d => <Cell key={d.name} fill={d.success < 90 ? '#e5a093' : config.success.color} />)}</Bar></BarChart></ChartContainer>
        <div className="preview-card-foot"><span className="preview-legend-dot" />{onlyIssues ? 'Filter active · Below 90%' : 'Successful builds by configuration'}</div>
      </article>
      <article className="native-chart-card">
        <div className="native-chart-title"><h4>Top 5 build history</h4><span className="preview-card-label">Duration</span></div>
        <div className="preview-chart-summary"><strong>2.9<span>min</span></strong><div><span>Latest average</span><small>Across 3 configurations</small></div></div>
        <ChartContainer config={config} className="native-rechart"><LineChart data={history} margin={{ left: -24, right: 9, top: 12, bottom: 0 }} accessibilityLayer><CartesianGrid vertical={false} strokeDasharray="3 4" /><XAxis dataKey="run" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} tickMargin={9} /><YAxis domain={[0, 8]} ticks={[0, 4, 8]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} /><ChartTooltip content={<ChartTooltipContent />} />{(['docs', 'api', 'web'] as const).map(k => <Line key={k} dataKey={k} type="monotone" stroke={config[k].color} strokeWidth={2} dot={{ r: 3, strokeWidth: 2, fill: 'var(--surface)' }} activeDot={{ r: 4 }} isAnimationActive={false} />)}</LineChart></ChartContainer>
        <div className="native-chart-legend"><span><i />Docs</span><span><i />API</span><span><i />Web</span></div>
      </article>
      <article className="native-chart-card">
        <div className="native-chart-title"><h4>Agent utilization</h4><Server size={14} /></div>
        <div className="preview-chart-summary"><strong>42<span>%</span></strong><div><span>Overall utilization</span><small>Across 4 build agents</small></div></div>
        <div className="agent-treemap" role="img" aria-label="Sample agent utilization: linux-agent-01 68 percent, windows-agent-01 44 percent, linux-agent-02 39 percent, mac-agent-01 17 percent">{sampleAgents.map(agent => <div key={agent.name}><span title={agent.name}>{agent.name}</span><strong>{agent.value}<small>%</small></strong></div>)}</div>
        <div className="preview-card-foot"><span className="preview-legend-dot" />Utilization over the selected period</div>
      </article>
    </div>
    <article className="native-recent-builds">
      <div className="native-chart-title"><div><h4>Recent builds</h4><span className="preview-table-count">4 runs</span></div><button className="preview-build-link" type="button" onClick={onOpenBuild}>Explore Build #15<ArrowUpRight size={14} /></button></div>
      <div className="native-table-scroll"><table><thead><tr>{['Build', 'Configuration', 'Status', 'Triggered', 'Completed', 'Duration'].map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{rows.map(r => <tr key={r[0]} className={r[2] === 'Failed' ? 'preview-failed-row' : ''}><td>{r[0] === '#15' ? <button type="button" onClick={onOpenBuild}>{r[0]}<ArrowUpRight size={11} /></button> : r[0]}</td><td>{r[1]}</td><td><span className={'native-status ' + (r[2] === 'Failed' ? 'failed' : 'passed')}>{r[2] === 'Failed' ? <span className="status-failure-dot" /> : <Check size={11} />}{r[2]}</span></td><td>{r[3]}</td><td>{r[4]}</td><td className="preview-duration">{r[5]}</td></tr>)}</tbody></table></div>
    </article>
    <div className="preview-dashboard-footer"><span aria-live="polite"><span className="preview-sample-dot" />{refreshed ? 'Sample refreshed at ' + refreshed : 'Sample data · Explore the workspace'}</span><label>Auto refresh<select aria-label="Sample auto-refresh interval" value={auto} onChange={e => setAuto(e.target.value)}><option value="0">Off</option><option value="10">10 seconds</option><option value="30">30 seconds</option><option value="60">1 minute</option></select></label></div>
  </>;
}
