-- Create database if not exists
CREATE DATABASE IF NOT EXISTS train_ticket_booking;
USE train_ticket_booking;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email)
);

-- Remove legacy tables no longer in use
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS trains;

-- Train schedules metadata
CREATE TABLE IF NOT EXISTS train_schedules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  train_name VARCHAR(255) NOT NULL,
  travel_date DATE NOT NULL,
  departure_time TIME NULL,
  arrival_time TIME NULL,
  start_station VARCHAR(255) NOT NULL,
  stop_station VARCHAR(255) NOT NULL,
  unavailable_seats LONGTEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_schedule_date (travel_date, departure_time)
);

-- Per-class carriage and seat configuration
CREATE TABLE IF NOT EXISTS train_classes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  train_id INT NOT NULL,
  class_name VARCHAR(50) NOT NULL,
  carriages INT NOT NULL,
  seat_rows INT NOT NULL,
  seat_cols INT NOT NULL,
  capacity INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_train_class (train_id, class_name),
  CONSTRAINT fk_train_classes_schedule FOREIGN KEY (train_id) REFERENCES train_schedules(id) ON DELETE CASCADE
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  train_name VARCHAR(255) NOT NULL,
  passenger_name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  gender ENUM('Male', 'Female', 'Other') NOT NULL,
  contact VARCHAR(20) NOT NULL,
  arrival_station VARCHAR(255) NOT NULL,
  departure_station VARCHAR(255) NOT NULL,
  travel_date DATE NOT NULL,
  class ENUM('First Class', 'Second Class', 'Third Class') NOT NULL DEFAULT 'Second Class',
  seat_number VARCHAR(10),
  seat_capacity INT DEFAULT 1,
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'confirmed',
  payment_status ENUM('unpaid', 'paid', 'refunded') DEFAULT 'paid',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_bookings (user_id, booking_date),
  INDEX idx_travel_date (travel_date),
  INDEX idx_train_date (train_name, travel_date)
);

