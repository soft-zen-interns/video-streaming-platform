const Sequelize = require('sequelize');
var express = require('express');
var app = express();
var mysql = require('mysql');
//var request=require('request')

const sequelize = new Sequelize('softzen', 'root', 'rootroot', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

var users = sequelize.define('genre', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    genre: Sequelize.STRING
});



app.get('/postGenre/:genreName', function (request, response) {
    const data = request.params;
    const genre = data.genreName;

    return users.create({
        genre: genre
    }).then(function (users) {
        if (users) {
            response.send(users);
        } else {
            response.status(400).send('Error in insert new record');
        }
    });
});

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});