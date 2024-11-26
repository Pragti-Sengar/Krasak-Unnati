// db.js
const { Client } = require('pg');

// Setup PostgreSQL client
const client = new Client({
    user: 'postgres',
    port: 5432,      // Replace with your PostgreSQL username
    host: 'localhost',
    database: 'krasak',  // Replace with your database name
    password: 'Pragti@123',  // Replace with your PostgreSQL password
    
});
client.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the PostgreSQL database');
    }
});

module.exports = client;
