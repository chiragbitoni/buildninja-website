"use client";
import React from 'react';
import './SandboxCTA.css';

export default function SandboxCTA() {
    const sandboxUrl = "https://gh-userservice-stage.grapehub.io/api/oauth/authorize?client_id=localhost.grapehub18032026103311.io&response_type=code&redirect_uri=https://buildninjadojo.grapehub.io/authredirect&scope=openid%20profile%20email&state=eyJfcmV0dXJuVXJsIjoiLyIsInJlZGlyZWN0UGF0aCI6Imh0dHBzOi8vYnVpbGRuaW5qYWRvam8uZ3JhcGVodWIuaW8vYXV0aHJlZGlyZWN0IiwiY2xpZW50SWQiOiJsb2NhbGhvc3QuZ3JhcGVodWIxODAzMjAyNjEwMzMxMS5pbyJ9";

    const features = [
        "No installation required",
        "Interactive sandbox environment",
        "Test failure scenarios risk-free",
        "Resets every 6 hours"
    ];

    return (
        <section className="sandboxCTA">
            <div className="sandboxInside">
                <div className="sandboxInfo">
                    <span className="sandboxBadge">Interactive Sandbox</span>
                    <h2 className="sandboxTitle">Enter the Dojo</h2>
                    <p className="sandboxDescription">
                        Experiment with build configurations and simulate real-world workflows in our safe, 
                        shared environment. No setup required.
                    </p>
                    
                    <ul className="sandboxFeatures">
                        {features.map((f, i) => (
                            <li key={i} className="sandboxFeature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {f}
                            </li>
                        ))}
                    </ul>

                    <button 
                        className="sandboxMainButton"
                        onClick={() => window.open(sandboxUrl, "_blank")}
                    >
                        Launch Dojo
                    </button>
                </div>
                
                <div className="sandboxDetails">
                    <div className="detailCard">
                        <h4>Suggested Exercises</h4>
                        <div className="exerciseList">
                            <div className="exerciseItem">
                                <strong>Run Your First Build</strong>
                                <span>See how execution behaves and logs appear in real-time.</span>
                            </div>
                            <div className="exerciseItem">
                                <strong>Simulate Workflows</strong>
                                <span>Create multi-step builds (install, test, build) without risk.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
