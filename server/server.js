const express = require('express');
const app = express();
const genresRoute = require('./Routes/genres.js');
const profilesRoute = require('./Routes/profiles.js');

app.use('/genres', genresRoute);
app.use('/profiles', profilesRoute);


var server = app.listen(8000, '0.0.0.0',function() {
    console.log("server started on port 8000...");
});