const express = require("express");
const ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"))

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});



app.listen(3000);