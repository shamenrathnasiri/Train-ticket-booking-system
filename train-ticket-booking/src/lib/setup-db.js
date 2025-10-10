import { getPool } from './db.js';
import fs from 'fs';
import path from 'path';

async function initializeDatabase() {
  console.log('🔍 Checking database setup...');
  
  try {
    // First, connect without specifying a database to check if it exists
    const mysql = await import('mysql2/promise');
    const connection = await mysql.default.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
    });

    // Check if database exists
    const [databases] = await connection.query(
      "SHOW DATABASES LIKE 'train_ticket_booking'"
    );

    if (databases.length === 0) {
      console.log('📦 Database not found. Creating database...');
      await connection.query('CREATE DATABASE train_ticket_booking');
      console.log(' Database created successfully!');
    } else {
      console.log(' Database already exists.');
    }

    // Switch to the database
    await connection.query('USE train_ticket_booking');

    // Check if tables exist
    const [tables] = await connection.query('SHOW TABLES');
    
    console.log(`Found ${tables.length} existing tables.`);
    
    if (tables.length === 0) {
      console.log('📋 Tables not found. Creating tables...');
      
      // Read and execute the SQL file
      const sqlFilePath = path.join(process.cwd(), 'scripts', 'init-db.sql');
      let sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
      
      // Remove comments
      sqlContent = sqlContent
        .split('\n')
        .filter(line => !line.trim().startsWith('--'))
        .join('\n');
      
      // Split by semicolon and filter empty statements
      const statements = sqlContent
        .split(';')
        .map(s => s.trim())
        .filter(s => s.length > 0);

      console.log(`   Executing ${statements.length} SQL statements...`);
      let executedCount = 0;

      for (const statement of statements) {
        // Skip CREATE DATABASE and USE statements as we already handled them
        if (statement.toUpperCase().includes('CREATE DATABASE IF NOT EXISTS')) {
          console.log('   Skipping CREATE DATABASE statement');
          continue;
        }
        if (statement.toUpperCase().startsWith('USE ')) {
          console.log('   Skipping USE statement');
          continue;
        }
        
        try {
          await connection.query(statement);
          executedCount++;
          if (statement.toUpperCase().includes('CREATE TABLE')) {
            const tableName = statement.match(/CREATE TABLE.*?`?(\w+)`?\s*\(/i)?.[1];
            console.log(`   ✓ Created table: ${tableName || 'unknown'}`);
          } else if (statement.toUpperCase().includes('INSERT INTO')) {
            const tableName = statement.match(/INSERT INTO.*?`?(\w+)`?/i)?.[1];
            console.log(`   ✓ Inserted data into: ${tableName || 'unknown'}`);
          }
        } catch (err) {
          // Ignore duplicate key errors for sample data and table exists errors
          if (!err.message.includes('Duplicate entry') && 
              !err.message.includes('already exists')) {
            console.error(`   ✗ Error: ${err.message}`);
            console.error(`   Statement preview: ${statement.substring(0, 100)}...`);
          } else if (err.message.includes('Duplicate entry')) {
            console.log(`   ℹ Skipped duplicate data`);
          }
        }
      }
      
      console.log(`   Executed ${executedCount} statements successfully.`);
      console.log('✅ Tables created and sample data inserted!');
    } else {
      console.log(`✅ Found ${tables.length} tables in database.`);
      
      // List the tables
      const tableNames = tables.map(t => Object.values(t)[0]);
      console.log('   Tables:', tableNames.join(', '));
      
      // Check if we have all required tables
      const requiredTables = ['users', 'bookings'];
      const missingTables = requiredTables.filter(t => !tableNames.includes(t));
      
      if (missingTables.length > 0) {
        console.log('⚠️  Missing tables:', missingTables.join(', '));
        console.log('   Creating missing tables...');
        
        // Read and execute the SQL file to create missing tables
        const sqlFilePath = path.join(process.cwd(), 'scripts', 'init-db.sql');
        let sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
        
        // Remove comments
        sqlContent = sqlContent
          .split('\n')
          .filter(line => !line.trim().startsWith('--'))
          .join('\n');
        
        const statements = sqlContent
          .split(';')
          .map(s => s.trim())
          .filter(s => s.length > 0);

        for (const statement of statements) {
          if (statement.toUpperCase().includes('CREATE DATABASE') || 
              statement.toUpperCase().startsWith('USE ')) {
            continue;
          }
          try {
            await connection.query(statement);
          } catch (err) {
            if (!err.message.includes('Duplicate entry') && 
                !err.message.includes('already exists')) {
              console.warn('Warning:', err.message);
            }
          }
        }
        console.log('✅ Missing tables created!');
      }
    }

    // Test connection using the same connection (not the pool)
    console.log('🔌 Testing database connection...');
    const [result] = await connection.query('SELECT COUNT(*) as count FROM trains');
    console.log(`✅ Connection successful! Found ${result[0].count} trains in database.`);
    
    // Now close the connection
    await connection.end();
    
    console.log('\n🎉 Database setup complete!\n');
    return true;

  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.error('\nError details:', error);
    console.error('\nPlease check:');
    console.error('1. MySQL server is running');
    console.error('2. Credentials in .env.local are correct');
    console.error('3. User has permission to create databases');
    return false;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase()
    .then(success => process.exit(success ? 0 : 1))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

export default initializeDatabase;
