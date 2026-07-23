import React from 'react';
import s from './CodeComparison.module.css';
import { CheckCircle2, AlertTriangle } from 'lucide-react';


export default function CodeComparison() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Pipeline Syntax Comparison</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Side-by-Side: Full Stack Pipeline
        </h2>
        <p className="section-subtitle">
          Both accomplish the same thing - install dependencies, build the application, run tests, and store artifacts.
        </p>

        <div className={s.codeCompare}>
          <div className={s.codeBlock}>
            <div className={`${s.codeHeader} ${s.codeHeaderBn}`}>BUILDNINJA · buildninja.yaml</div>
            <pre className={s.pre}>
              <span className={s.cm}># Name of the build configuration used for identification within BuildNinja.</span>{'\n'}
              <span className={s.kw}>name</span>: <span className={s.str}>backend-build</span>{'\n'}
              {'\n'}
              <span className={s.cm}># Brief description of what this build does.</span>{'\n'}
              <span className={s.kw}>description</span>: <span className={s.str}>Complete build configuration example</span>{'\n'}
              {'\n'}
              <span className={s.cm}># Version of the configuration file.</span>{'\n'}
              <span className={s.kw}>version</span>: <span className={s.val}>1.0</span>{'\n'}
              {'\n'}
              <span className={s.kw}>settings</span>:{'\n'}
              {'\n'}
              {'  '}<span className={s.cm}># Build Execution Steps</span>{'\n'}
              {'  '}<span className={s.kw}>build-steps</span>:{'\n'}
              {'    '}- <span className={s.kw}>key</span>: <span className={s.str}>runner_cmd</span>                      <span className={s.cm}># Uses Command Line runner.</span>{'\n'}
              {'      '}<span className={s.kw}>name</span>: <span className={s.str}>Install Dependencies</span>           <span className={s.cm}># Step name shown in logs and UI.</span>{'\n'}
              {'      '}<span className={s.kw}>disabled</span>: <span className={s.val}>false</span>                      <span className={s.cm}># Executes this step.</span>{'\n'}
              {'      '}<span className={s.kw}>workDir</span>: <span className={s.str}>""</span>                          <span className={s.cm}># Working directory (empty = default).</span>{'\n'}
              {'      '}<span className={s.kw}>args</span>:{'\n'}
              {'        '}<span className={s.kw}>commands</span>: |-                       <span className={s.cm}># Multiple shell commands.</span>{'\n'}
              {'          '}<span className={s.str}>npm install</span>                      <span className={s.cm}># Install project dependencies.</span>{'\n'}
              {'          '}<span className={s.str}>npm run lint</span>                     <span className={s.cm}># Run lint checks.</span>{'\n'}
              {'      '}<span className={s.kw}>argsProtected</span>: {'{}'}                    <span className={s.cm}># No sensitive values for this step.</span>{'\n'}
              {'\n'}
              {'    '}- <span className={s.kw}>key</span>: <span className={s.str}>runner_msbuild</span>                  <span className={s.cm}># Uses MSBuild runner.</span>{'\n'}
              {'      '}<span className={s.kw}>name</span>: <span className={s.str}>Build Application</span>              <span className={s.cm}># Builds the application using MSBuild.</span>{'\n'}
              {'      '}<span className={s.kw}>disabled</span>: <span className={s.val}>false</span>{'\n'}
              {'      '}<span className={s.kw}>workDir</span>: <span className={s.str}>""</span>{'\n'}
              {'      '}<span className={s.kw}>args</span>:{'\n'}
              {'        '}<span className={s.kw}>solution</span>: <span className={s.str}>BackendService.sln</span>       <span className={s.cm}># Path to the solution file.</span>{'\n'}
              {'        '}<span className={s.kw}>configuration</span>: <span className={s.str}>Release</span>             <span className={s.cm}># Build configuration.</span>{'\n'}
              {'        '}<span className={s.kw}>parameters</span>: <span className={s.str}>"/m"</span>                   <span className={s.cm}># Additional MSBuild parameters.</span>{'\n'}
              {'\n'}
              {'    '}- <span className={s.kw}>key</span>: <span className={s.str}>runner_vstest</span>                   <span className={s.cm}># Uses VSTest runner.</span>{'\n'}
              {'      '}<span className={s.kw}>name</span>: <span className={s.str}>Run Unit Tests</span>                 <span className={s.cm}># Executes automated tests.</span>{'\n'}
              {'      '}<span className={s.kw}>disabled</span>: <span className={s.val}>false</span>{'\n'}
              {'      '}<span className={s.kw}>workDir</span>: <span className={s.str}>""</span>{'\n'}
              {'      '}<span className={s.kw}>args</span>:{'\n'}
              {'        '}<span className={s.kw}>testAssembly</span>: <span className={s.str}>tests/BackendService.Tests.dll</span>  <span className={s.cm}># Test assembly path.</span>{'\n'}
              {'        '}<span className={s.kw}>reportDir</span>: <span className={s.str}>reports</span>                            <span className={s.cm}># Directory for test reports.</span>{'\n'}
              {'        '}<span className={s.kw}>reportName</span>: <span className={s.str}>unit-test-results</span>                 <span className={s.cm}># Report file name.</span>{'\n'}
              {'        '}<span className={s.kw}>failCriterian</span>: <span className={s.str}>failedTests</span>                    <span className={s.cm}># Fail build if tests fail.</span>{'\n'}
              {'        '}<span className={s.kw}>args</span>: <span className={s.str}>""</span>                                      <span className={s.cm}># Additional VSTest arguments.</span>{'\n'}
              {'\n'}
              {'  '}<span className={s.cm}># Artifact Collection</span>{'\n'}
              {'  '}<span className={s.kw}>artifacts</span>:{'\n'}
              {'    '}- <span className={s.kw}>name</span>: <span className={s.str}>build-artifacts</span>                <span className={s.cm}># Logical name for the artifact set.</span>{'\n'}
              {'      '}<span className={s.kw}>condition</span>: <span className={s.str}>buildSucceeds</span>             <span className={s.cm}># Collect artifacts only on success.</span>{'\n'}
              {'      '}<span className={s.kw}>paths</span>:{'\n'}
              {'        '}- <span className={s.str}>bin/Release</span>                      <span className={s.cm}># Compiled binaries.</span>{'\n'}
              {'        '}- <span className={s.str}>reports</span>                          <span className={s.cm}># Test reports.</span>{'\n'}
            </pre>
          </div>

          <div className={s.codeBlock}>
            <div className={`${s.codeHeader} ${s.codeHeaderCi}`}>CIRCLECI · .circleci/config.yml</div>
            <pre className={s.pre}>
              <span className={s.cm}># CircleCI pipeline - requires orbs, executors, and manual routing</span>{'\n'}
              <span className={s.kw}>version</span>: <span className={s.val}>2.1</span>{'\n'}
              {'\n'}
              <span className={s.kw}>orbs</span>:{'\n'}
              {'  '}<span className={s.kw}>node</span>: <span className={s.str}>circleci/node@5.0.0</span>{'\n'}
              {'  '}<span className={s.kw}>windows</span>: <span className={s.str}>circleci/windows@5.0.0</span>{'\n'}
              {'\n'}
              <span className={s.kw}>jobs</span>:{'\n'}
              {'  '}<span className={s.kw}>build-and-test</span>:{'\n'}
              {'    '}<span className={s.kw}>executor</span>:{'\n'}
              {'      '}<span className={s.kw}>name</span>: <span className={s.str}>windows/default</span>{'\n'}
              {'    '}<span className={s.kw}>steps</span>:{'\n'}
              {'      '}- <span className={s.str}>checkout</span>{'\n'}
              {'      '}- <span className={s.str}>node/install-packages</span>:{'\n'}
              {'          '}<span className={s.kw}>pkg-manager</span>: <span className={s.str}>npm</span>{'\n'}
              {'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm run lint</span>{'\n'}
              {'      '}- <span className={s.kw}>run</span>:{'\n'}
              {'          '}<span className={s.kw}>name</span>: <span className={s.str}>Build Application</span>{'\n'}
              {'          '}<span className={s.kw}>command</span>: <span className={s.str}>msbuild BackendService.sln /p:Configuration=Release /m</span>{'\n'}
              {'      '}- <span className={s.kw}>run</span>:{'\n'}
              {'          '}<span className={s.kw}>name</span>: <span className={s.str}>Run Unit Tests</span>{'\n'}
              {'          '}<span className={s.kw}>command</span>: <span className={s.str}>vstest.console.exe tests/BackendService.Tests.dll</span>{'\n'}
              {'      '}- <span className={s.str}>store_test_results</span>:{'\n'}
              {'          '}<span className={s.kw}>path</span>: <span className={s.str}>reports</span>{'\n'}
              {'      '}- <span className={s.str}>store_artifacts</span>:{'\n'}
              {'          '}<span className={s.kw}>path</span>: <span className={s.str}>bin/Release</span>{'\n'}
              {'          '}<span className={s.kw}>destination</span>: <span className={s.str}>build-artifacts</span>{'\n'}
              {'\n'}
              <span className={s.kw}>workflows</span>:{'\n'}
              {'  '}<span className={s.kw}>main</span>:{'\n'}
              {'    '}<span className={s.kw}>jobs</span>:{'\n'}
              {'      '}- <span className={s.str}>build-and-test</span>{'\n'}
              {'\n'}
              <span className={s.cm}># <AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Requires multiple orbs, heavy syntax overhead,</span>{'\n'}
              <span className={s.cm}># and manual test result tracking.</span>{'\n'}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
