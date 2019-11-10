const mysql = require('mysql');
const Sequelize = require('sequelize');
const router = require('express').Router();

const connection = mysql.createPool({
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

const genres = sequelize.define('genres', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    title: Sequelize.STRING
});

router.get('/',function (req, res)
{
    console.log("Index page loaded.");
    res.send("GO TO \"localhost:8000/genres/all-genres\" TO GET THE GENRES! " +
        "OR " +
        "GO TO \"localhost:8000/genres/create-genre/\" + 'genre name' TO CREATE GENRE!");

    connection.getConnection(function (err, connection)
    {
        var pop = "pop";
        var hiphop = "hip-hop";
        var rock = "rock";
        var rap = "rap";
        var blues = "blues";
        var genreNames = [pop,hiphop,rock,rap,blues];

        genreNames.forEach(
            function (name)
            {
                connection.query("Select (title) from genres where title = '" + name + "'", function (err, result) {
                    if (err) {
                        console.log("Database error");
                    }
                    else if(result.toString() !== "")
                    {
                        console.log("-> " + name + " already exists.");
                    }
                    else {
                        genres.create({title: name});
                        console.log("-> " + name + " created successfully");
                    }
                })
            }
        );
    });
});


router.get('/all-genres', function (req,res) {

    connection.getConnection(function (err, connection) {
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
});

router.get('/create-genre/:genreName', function (req, res) {
    const data = req.params;
    const genre = data.genreName;

    return genres.create({
        title: genre
    }).then(function (genres) {
        if (genres) {
            res.send("Genre record was created -> JSON: " +  JSON.stringify(genres));
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
});
module.exports = router;