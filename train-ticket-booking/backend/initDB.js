const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    multipleStatements: true, // this use for allow multiple queries
})

const CreateDBAndTable = `
CREATE DATABASE IF NOT EXISTS train_ticket_system;
USE train_ticket_system;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    contact VARCHAR(100),
    from_station VARCHAR(100),
    to_station VARCHAR(100),
    travel_date DATE,
    class VARCHAR(20),
    tickets INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
`;

connection.connect((err) => {
    if(err) throw err;
    console.log("MySQL Connected");

    connection.query(CreateDBAndTable, (err, result) => {
        if (err) throw err;
        console.log("Database and table initialized");
        connection.end();
    });
});