const express = require('express');
const app = express();
const genresRoute = require('./Routes/genres.js');

app.use('/genres', genresRoute);

var server = app.listen(8000, '0.0.0.0',function() {
    console.log("Server started on port 8000...");
});