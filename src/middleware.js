import { NextResponse } from 'next/server';

let dbInitialized = false;

export async function middleware(request) {
  // Initialize database on first request
  if (
    !dbInitialized &&
    typeof window === 'undefined' &&
    // Skip in Edge runtime (middleware runs on Edge)
    typeof EdgeRuntime === 'undefined'
  ) {
    try {
      console.log(' Middleware: Ensuring database setup...');
      const { ensureDatabaseSetup } = await import('./lib/init.js');
      await ensureDatabaseSetup();
      dbInitialized = true;
      console.log(' Middleware: Database ready');
    } catch (error) {
      console.error('Middleware: Database initialization failed:', error);
    }
  }
  
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: '/api/:path*',
};
