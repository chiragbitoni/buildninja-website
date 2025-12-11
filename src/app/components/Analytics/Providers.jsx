'use client';

import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { useEffect } from 'react';

export default function PHProviderWrapper({ children }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
            person_profiles: 'identified_only',
            // Routing
            capture_pageview: false,   // tracking manually
            capture_pageleave: true,

            // Autotracking
            autocapture: true,
            rageclick: true,
            scroll_depth: true,

            // Session Replay / Heatmaps
            session_recording: {
                captureCanvas: true,
                recording: true
            }
        });
    }, []);

    return (
        <PostHogProvider client={posthog}>
            {children}
        </PostHogProvider>
    );
}
