const mysql = require('mysql');
const Sequelize = require('sequelize');
const router = require('express').Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'softzen'
});

const sequelize = new Sequelize('softzen', 'root', 'rootroot', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const genres = sequelize.define('genre', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    genre: Sequelize.STRING
});

router.get('/',function (req, res) {
    console.log("Index page loaded.");
    res.send("GO TO \"localhost:8000/genres/all-genres\" TO GET THE GENRES!");
});


router.get('/all-genres', function (req,res) {
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

router.get('/create-genre/:genreName', function (req, res) {
    const data = req.params;
    const genre = data.genreName;

    return genres.create({
        genre: genre
    }).then(function (genres) {
        if (genres) {
            res.send("Genre record was created -> JSON: " +  JSON.stringify(genres));
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
});

module.exports = router;