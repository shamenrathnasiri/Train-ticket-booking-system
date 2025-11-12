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
    
    // Test 2: Check train schedules
    const [trainSchedules] = await pool.query('SELECT * FROM train_schedules');
    console.log('\n✅ Train schedules found:', trainSchedules.length);
    trainSchedules.forEach(schedule => {
      console.log(`   - ${schedule.train_name} on ${schedule.travel_date}`);
    });

    // Test 3: Check class configurations
    const [classConfigs] = await pool.query('SELECT COUNT(*) as count FROM train_classes');
    console.log('\n✅ Class configurations found:', classConfigs[0].count);
    
    console.log('\n🎉 Database is working perfectly!');
    
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testDatabase();
