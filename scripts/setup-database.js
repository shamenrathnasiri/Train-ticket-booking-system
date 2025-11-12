#!/usr/bin/env node

/**
 * Manual Database Setup Script
 * Run this script to manually create/verify the database and tables
 * Usage: node scripts/setup-database.js
 */

import initializeDatabase from '../src/lib/setup-db.js';

console.log('===============================================');
console.log('   Train Ticket Booking System');
console.log('   Database Setup Script');
console.log('===============================================\n');

initializeDatabase()
  .then(success => {
    console.log('\n===============================================');
    if (success) {
      console.log('   ✅ Database setup completed successfully!');
      console.log('   You can now start the application.');
    } else {
      console.log('   ❌ Database setup failed!');
      console.log('   Please check the error messages above.');
    }
    console.log('===============================================\n');
    process.exit(success ? 0 : 1);
  })
  .catch(err => {
    console.error('\n❌ Fatal error:', err);
    process.exit(1);
  });
