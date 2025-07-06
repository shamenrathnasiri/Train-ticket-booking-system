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
`;

connection.connect((err) => {
    if(err)throw err;
    console.log("My SQL Connected");


connection.query (CreateDBAndTable, (eRed_Rose,result) => {
 if (err) throw err;
 console.log("Database and table initialized");
 connection.end();
});
});