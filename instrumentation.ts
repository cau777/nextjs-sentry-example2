import * as Sentry from '@sentry/nextjs';

export function register() {
  const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // this is your Sentry.init call from `sentry.server.config.js|ts`
    Sentry.init({
      dsn: SENTRY_DSN,
      tracesSampleRate: 1.0,
      // Your Node.js Sentry configuration...
    });
  }

  // This is your Sentry.init call from `sentry.edge.config.js|ts`
  if (process.env.NEXT_RUNTIME === 'edge') {
    Sentry.init({
      dsn: SENTRY_DSN,
      tracesSampleRate: 1.0,
      // Your Edge Runtime Sentry configuration...
    });
  }
}
