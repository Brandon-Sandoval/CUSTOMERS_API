const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.send("Welcome to my API");
});

app.get('/customers', (req, res)=> {
    const sql = 'SELECT * FROM customers';

    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0){
            res.json(result);
        } else {
            res.send('No Data');
        }
    });
});

app.get('/customers/:id', (req, res)=> {
    res.send("Get customers by id");
});

app.post('/add', (req, res)=> {
    res.send("New customers");
});

app.put('/update/:id', (req, res)=> {
    res.send("Update customer");
});

app.delete('/delete/:id', (req, res)=> {
    res.send("Delete customer");
});


// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log("Database server running!");
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));