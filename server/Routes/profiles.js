const router = require('express').Router();
const mysql = require('mysql');
const Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

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
    about: Sequelize.STRING,
    token: Sequelize.STRING
});

router.post('/new-profile', function (req,res){
    console.log(req.body);
    var username = req.body.username;
    var about = req.body.about;
    var website = req.body.website;
    var password = req.body.password;
    var payload =
        {
            username: username,
            about: about,
            website: website,
            password: password
        };

    connection.getConnection(function (err, connection) {
        connection.query("Select (username) from profiles where username = '" + username + "'", function (err, result) {
            if (err) {
                console.log("Database error");
            } else if (result.toString() !== "") {
                console.log("-> " + username + " already exists.");
                res.send("-> " + username + " already exists.");
            } else {
                //
                if (password != null) {
                    let token = jwt.sign(payload, "secret_key", {algorithm: 'HS256'});

                    // jwt.verify(token, server_key, { algorithm: "HS256" }, (err, payload) => {
                    //     if (err) {
                    //         res.send('Access deny!');
                    //     }
                    //     else {
                    //         var payload_str = JSON.stringify(payload);
                    //         res.send("Access granted!  Payload: " + payload_str + "  Token: " + token);
                    //     }
                    // });
                    //
                    //
                    return profiles.create({
                        username: username,
                        website: website,
                        about: about,
                        token: token
                    }).then(function (profiles) {
                        if (profiles) {
                            res.send("Profile record was created -> JSON: " + JSON.stringify(profiles));
                        } else {
                            res.status(400).send('Error in insert new record');
                        }
                    })
                }
                else
                    res.status(400).send('No password!');
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