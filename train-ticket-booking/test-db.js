// Quick test to verify database setup
import { getPool } from './src/lib/db.js';

async function testDatabase() {
  try {
    console.log('Testing database connection...\n');
    
    const pool = getPool();
    
    // Test 1: Check tables exist
    const [tables] = await pool.query('SHOW TABLES');
    console.log('✅ Tables found:', tables.length);
    tables.forEach(t => {
      const tableName = Object.values(t)[0];
      console.log('   -', tableName);
    });
    
    // Test 2: Check trains
    const [trains] = await pool.query('SELECT * FROM trains');
    console.log('\n✅ Trains found:', trains.length);
    trains.forEach(t => {
      console.log(`   - ${t.train_number}: ${t.train_name}`);
    });
    
    // Test 3: Check schedules
    const [schedules] = await pool.query('SELECT COUNT(*) as count FROM schedules');
    console.log('\n✅ Schedules found:', schedules[0].count);
    
    console.log('\n🎉 Database is working perfectly!');
    
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testDatabase();
