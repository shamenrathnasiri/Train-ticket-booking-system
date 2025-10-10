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
// This ensures tables are created when the Next.js server starts
if (typeof window === 'undefined') {
  // Only run on server-side
  ensureDatabaseSetup().catch(err => {
    console.error('Failed to initialize database:', err);
  });
}
