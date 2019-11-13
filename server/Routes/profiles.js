const router = require('express').Router();
const mysql = require('mysql');
const Sequelize = require('sequelize');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

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

const profiles = sequelize.define('profiles', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    username: Sequelize.STRING,
    website: Sequelize.STRING,
    about: Sequelize.STRING
});

router.post('/new-profile', function (req,res){
    console.log(req.body);
    var username = req.body.username;
    var about = req.body.about;
    var website = req.body.website;

    connection.getConnection(function (err, connection) {
        connection.query("Select (username) from profiles where username = '" + username + "'", function (err, result) {
            if (err) {
                console.log("Database error");
            } else if (result.toString() !== "") {
                console.log("-> " + username + " already exists.");
                res.send("-> " + username + " already exists.");
            } else {
                return profiles.create({
                    username: username,
                    website: website,
                    about: about
                }).then(function (profiles) {
                    if (profiles) {
                        res.send("Profile record was created -> JSON: " +  JSON.stringify(profiles));
                    } else {
                        res.status(400).send('Error in insert new record');
                    }
                })
            }
        })
    })
});

router.get('/all-profiles', function (req,res) {

    connection.getConnection(function (err, connection) {
        connection.query("SELECT * FROM profiles ORDER BY id ASC", function (err, result) {
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

router.get('/',(req,res) => {
    res.send("Welcome to the Profiles-information page. Go to 'localhost:8000/profiles/new-profile' to create profile. Or go to 'localhost:8000/profiles/all-profiles' to get all the profiles.");
});


module.exports = router;