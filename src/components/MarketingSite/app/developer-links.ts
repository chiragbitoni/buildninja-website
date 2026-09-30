import { env } from '@/lib/config/env';

export const kenzoPortalOrigin = env.KENZO_AI_DEV_PORTAL_URL.replace(/\/+$/, '');
export const kenzoLinks = {
  signIn: `${kenzoPortalOrigin}/`,
  dashboard: `${kenzoPortalOrigin}/dashboard`,
  docs: `${kenzoPortalOrigin}/docs/overview/`,
  application: `${kenzoPortalOrigin}/docs/getting-started/create-application`,
  readiness: `${kenzoPortalOrigin}/docs/getting-started/access-and-readiness`,
  integration: `${kenzoPortalOrigin}/docs/getting-started/integrate-kenzoai-with-buildninja`,
  platform: `${kenzoPortalOrigin}/docs/kenzoai-platform-model`,
  usage: `${kenzoPortalOrigin}/docs/kenzoai-management-and-insights/usage-and-credit-analytics`,
  buildninjaSetup: `${env.DOCUMENTATION_URL.replace(/\/+$/, '')}/administrator-guide/manage-kenzoai-access`,
};
