var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'softzen'
});

app.get('/',function (req, res) {
    console.log("Index page loaded.");
    res.send("GO TO \"localhost:8000/all-genres\" TO GET THE GENRES!");
});


app.get('/all-genres', function (req,res) {
    connection.connect();
    connection.query("SELECT * FROM genres ORDER BY id ASC", function (err, result) {
        if (err) {
			res.send(err.message);
            console.log("Database error!");
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});

var server = app.listen(8000, '0.0.0.0',function() {
    console.log("Server started on 8000.....");
});