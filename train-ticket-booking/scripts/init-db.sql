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

-- Trains table
CREATE TABLE IF NOT EXISTS trains (
  id INT PRIMARY KEY AUTO_INCREMENT,
  train_number VARCHAR(50) UNIQUE NOT NULL,
  train_name VARCHAR(255) NOT NULL,
  total_seats INT NOT NULL DEFAULT 60,
  seat_layout_rows INT DEFAULT 10,
  seat_layout_cols INT DEFAULT 6,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_train_number (train_number)
);

-- Routes/Schedules table
CREATE TABLE IF NOT EXISTS schedules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  train_id INT NOT NULL,
  from_station VARCHAR(255) NOT NULL,
  to_station VARCHAR(255) NOT NULL,
  departure_time TIME NOT NULL,
  arrival_time TIME NOT NULL,
  base_price DECIMAL(10,2) NOT NULL,
  days_of_week VARCHAR(50) DEFAULT 'Mon,Tue,Wed,Thu,Fri,Sat,Sun',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (train_id) REFERENCES trains(id) ON DELETE CASCADE,
  INDEX idx_stations (from_station, to_station),
  INDEX idx_train_schedule (train_id, is_active)
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

