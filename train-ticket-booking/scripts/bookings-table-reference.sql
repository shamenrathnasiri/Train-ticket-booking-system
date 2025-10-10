/*
 * BOOKINGS TABLE SQL - Quick Reference
 * Copy and paste this if you need to recreate the table manually
 */

-- Drop existing table (WARNING: This will delete all data!)
-- DROP TABLE IF EXISTS bookings;

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  -- Primary Key
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Unique booking ID',
  
  -- Foreign Key (User who made the booking)
  user_id INT NOT NULL COMMENT 'References users.id',
  
  -- Train & Journey Details
  train_name VARCHAR(255) NOT NULL COMMENT 'Selected train name',
  departure_station VARCHAR(255) NOT NULL COMMENT 'Starting station',
  arrival_station VARCHAR(255) NOT NULL COMMENT 'Destination station',
  travel_date DATE NOT NULL COMMENT 'Date of travel',
  
  -- Passenger Information
  passenger_name VARCHAR(255) NOT NULL COMMENT 'Name of passenger',
  age INT NOT NULL COMMENT 'Passenger age',
  gender ENUM('Male', 'Female', 'Other') NOT NULL COMMENT 'Passenger gender',
  contact VARCHAR(20) NOT NULL COMMENT 'Contact number',
  
  -- Seat & Class Information
  class ENUM('First Class', 'Second Class', 'Third Class') NOT NULL DEFAULT 'Second Class' COMMENT 'Travel class',
  seat_number VARCHAR(10) COMMENT 'Assigned seat number',
  seat_capacity INT DEFAULT 1 COMMENT 'Number of seats booked',
  
  -- Booking Status
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'When booking was created',
  status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'confirmed' COMMENT 'Booking status',
  payment_status ENUM('unpaid', 'paid', 'refunded') DEFAULT 'paid' COMMENT 'Payment status',
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Record creation time',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update time',
  
  -- Foreign Key Constraint
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  
  -- Indexes for Performance
  INDEX idx_user_bookings (user_id, booking_date),
  INDEX idx_travel_date (travel_date),
  INDEX idx_train_date (train_name, travel_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Train ticket bookings';

