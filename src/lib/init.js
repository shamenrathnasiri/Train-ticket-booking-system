import initializeDatabase from '../lib/setup-db.js';

// Auto-initialize database on server startup
let initialized = false;

export async function ensureDatabaseSetup() {
  if (!initialized) {
    console.log('🚀 Initializing database setup...');
    initialized = true;
    await initializeDatabase();
  }
}

// Automatically run database setup when this module is loaded
// Only in Node.js runtime (not Edge/middleware)
if (typeof window === 'undefined' && typeof EdgeRuntime === 'undefined') {
  ensureDatabaseSetup().catch(err => {
    console.error('Failed to initialize database:', err);
  });
}
