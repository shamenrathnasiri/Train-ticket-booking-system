//this is use for connect with database

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "train_ticket_system",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to train_ticket_system_DB");
});

module.export = db;