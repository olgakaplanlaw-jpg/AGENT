'use strict';

const sqlite3 = require('sqlite3').verbose();

// Connecting to the database
let db = new sqlite3.Database('./call_logs.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    }
});

// Create tables if they don't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS call_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        call_id TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        duration INTEGER,
        outcome TEXT
    );`);
    
db.run(`CREATE TABLE IF NOT EXISTS transcripts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        call_id TEXT NOT NULL,
        transcript TEXT NOT NULL
    );`);
    
db.run(`CREATE TABLE IF NOT EXISTS gender_detection (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        call_id TEXT NOT NULL,
        gender TEXT NOT NULL
    );`);
});

// Close the database connection
process.on('exit', () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing database ' + err.message);
        }
    });
});

module.exports = db;