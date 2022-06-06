const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'homzv95p61fzbqmv',
    password: 'qh07tjyec75joxn0',
    database: 'wkacna8xtoi55731'
});

module.exports = connection;