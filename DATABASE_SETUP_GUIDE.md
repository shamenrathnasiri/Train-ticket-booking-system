# Database Setup Guide - Train Ticket Booking System

## 📋 Table of Contents
1. [Booking Table Structure](#booking-table-structure)
2. [How to Create the Database](#how-to-create-the-database)
3. [Database Schema Overview](#database-schema-overview)
4. [Troubleshooting](#troubleshooting)

---

## 🎫 Booking Table Structure

The `bookings` table has been created with the following fields:

### Primary Key
- **id** - `INT PRIMARY KEY AUTO_INCREMENT`
  - Unique identifier for each booking

### Foreign Key
- **user_id** - `INT NOT NULL`
  - Foreign key referencing `users(id)`
  - Identifies which user made the booking
  - `ON DELETE CASCADE` - deletes bookings when user is deleted

### Booking Information Fields
- **train_name** - `VARCHAR(255) NOT NULL`
  - Name of the selected train
  
- **passenger_name** - `VARCHAR(255) NOT NULL`
  - Name of the passenger
  
- **age** - `INT NOT NULL`
  - Age of the passenger
  
- **gender** - `ENUM('Male', 'Female', 'Other') NOT NULL`
  - Gender of the passenger
  
- **contact** - `VARCHAR(20) NOT NULL`
  - Contact number for the booking
  
- **arrival_station** - `VARCHAR(255) NOT NULL`
  - Destination station
  
- **departure_station** - `VARCHAR(255) NOT NULL`
  - Starting station
  
- **travel_date** - `DATE NOT NULL`
  - Date of travel
  
- **class** - `ENUM('First Class', 'Second Class', 'Third Class')`
  - Travel class (defaults to 'Second Class')
  
- **seat_number** - `VARCHAR(10)`
  - Assigned seat number (optional)
  
- **seat_capacity** - `INT DEFAULT 1`
  - Number of seats booked

### Status Fields
- **booking_date** - `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
  - When the booking was created
  
- **status** - `ENUM('pending', 'confirmed', 'cancelled')`
  - Booking status (defaults to 'confirmed')
  
- **payment_status** - `ENUM('unpaid', 'paid', 'refunded')`
  - Payment status (defaults to 'paid')

### Timestamp Fields
- **created_at** - `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
  - Record creation time
  
- **updated_at** - `TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
  - Last update time (auto-updates)

### Indexes for Performance
- `idx_user_bookings` - Index on (user_id, booking_date)
- `idx_travel_date` - Index on travel_date
- `idx_train_date` - Index on (train_name, travel_date)

---

## 🚀 How to Create the Database

The database tables are created **automatically** when you set up the project. Follow these steps:

### Step 1: Configure Environment Variables

Ensure your `.env.local` file has the correct database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=train_ticket_booking

JWT_SECRET=your-secret-key-change-this-in-production-min-32-chars
JWT_EXPIRES_IN=7d
```

### Step 2: Make Sure MySQL is Running

#### On Windows:
```powershell
# Check if MySQL is running
Get-Service -Name MySQL*

# Start MySQL if not running
Start-Service -Name MySQL80  # Adjust name based on your version
```

#### On macOS/Linux:
```bash
# Check status
sudo systemctl status mysql

# Start MySQL if not running
sudo systemctl start mysql
```

### Step 3: Run Database Setup

You have **three options** to create the database:

#### Option 1: Using npm script (Recommended)
```powershell
npm run db:setup
```

#### Option 2: Using the alternative script
```powershell
npm run setup-db
```

#### Option 3: Direct execution
```powershell
node scripts/setup-database.js
```

### Step 4: Verify Database Creation

The script will automatically:
1. ✅ Create the `train_ticket_booking` database
2. ✅ Create all required tables (users, trains, schedules, bookings)
3. ✅ Insert sample data for trains and schedules
4. ✅ Display confirmation messages

You should see output like:
```
===============================================
   Train Ticket Booking System
   Database Setup Script
===============================================

🔍 Checking database setup...
📦 Database not found. Creating database...
✅ Database created successfully!
📋 Tables not found. Creating tables...
   ✓ Created table: users
   ✓ Created table: trains
   ✓ Created table: schedules
   ✓ Created table: bookings
✅ Tables created and sample data inserted!
```

---

## 📊 Database Schema Overview

### Complete Database Structure:

```
train_ticket_booking/
├── users                 # User accounts
│   ├── id (PK)
│   ├── email (unique)
│   ├── password
│   ├── full_name
│   ├── phone
│   └── timestamps
│
├── trains                # Train information
│   ├── id (PK)
│   ├── train_number (unique)
│   ├── train_name
│   ├── total_seats
│   └── timestamps
│
├── schedules             # Train routes and timings
│   ├── id (PK)
│   ├── train_id (FK → trains)
│   ├── from_station
│   ├── to_station
│   ├── departure_time
│   ├── arrival_time
│   └── timestamps
│
└── bookings              # Ticket bookings ⭐ NEW STRUCTURE
    ├── id (PK)
    ├── user_id (FK → users)
    ├── train_name
    ├── passenger_name
    ├── age
    ├── gender
    ├── contact
    ├── arrival_station
    ├── departure_station
    ├── travel_date
    ├── class
    ├── seat_number
    ├── seat_capacity
    └── timestamps
```

---

## 🛠️ Troubleshooting

### Problem: "Access denied for user"
**Solution:**
- Check your `.env.local` file
- Verify DB_USER and DB_PASSWORD are correct
- Make sure the MySQL user has permissions to create databases

```sql
-- Grant permissions (run in MySQL as root)
GRANT ALL PRIVILEGES ON *.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;
```

### Problem: "ECONNREFUSED"
**Solution:**
- MySQL server is not running
- Start MySQL service (see Step 2 above)

### Problem: "Table already exists" errors
**Solution:**
- The database has already been created
- This is normal! The script uses `CREATE TABLE IF NOT EXISTS`
- Your database is ready to use

### Problem: Need to recreate database from scratch
**Solution:**
```powershell
# Connect to MySQL
mysql -u root -p

# Drop and recreate
DROP DATABASE IF EXISTS train_ticket_booking;
EXIT;

# Run setup again
npm run db:setup
```

### Problem: Want to see the database
**Solution:**
```powershell
# Connect to MySQL
mysql -u root -p

# Select database
USE train_ticket_booking;

# Show tables
SHOW TABLES;

# Describe bookings table
DESCRIBE bookings;

# View sample data
SELECT * FROM bookings;
```

---

## 🔄 Updating the Database

If you need to modify the `bookings` table structure in the future:

1. Edit `scripts/init-db.sql`
2. Drop the existing table:
   ```sql
   DROP TABLE IF EXISTS bookings;
   ```
3. Run the setup again:
   ```powershell
   npm run db:setup
   ```

---

## 📝 Example: Inserting a Booking

```sql
INSERT INTO bookings (
  user_id,
  train_name,
  passenger_name,
  age,
  gender,
  contact,
  arrival_station,
  departure_station,
  travel_date,
  class,
  seat_capacity
) VALUES (
  1,                          -- user_id (must exist in users table)
  'Express Colombo-Kandy',    -- train_name
  'John Doe',                 -- passenger_name
  35,                         -- age
  'Male',                     -- gender
  '+94771234567',             -- contact
  'Kandy',                    -- arrival_station
  'Colombo Fort',             -- departure_station
  '2025-10-15',               -- travel_date
  'Second Class',             -- class
  2                           -- seat_capacity (2 seats)
);
```

---

## ✅ Quick Reference Commands

```powershell
# Setup database (first time)
npm run db:setup

# Start development server
npm run dev

# Check for linting errors
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

---

## 🎯 Summary

Your `bookings` table is now configured with:
- ✅ **Primary Key**: `id` (auto-increment)
- ✅ **Foreign Key**: `user_id` → references `users(id)`
- ✅ **All Required Fields**: train selection, passenger details, stations, dates, class, seat capacity
- ✅ **Automatic Creation**: Tables are created automatically when you run setup
- ✅ **Proper Indexes**: Optimized for performance

The database will be created automatically when you run `npm run db:setup`!
