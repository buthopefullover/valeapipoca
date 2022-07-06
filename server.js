const express = require("express");
const history = require("connect-history-api-fallback")
const serveStatic = require("serve-static");
const path = require("path");
const port = process.env.PORT || 8080;

// Connection to the database
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


//
const app = express();
app.get('/movies', function (req, res){
    console.log('qualquer coisa')
    let movies = [];
    client.connect();
    client.query('SELECT * FROM movies;', (err, res) => {
        if (err) throw err;
        movies = res;
        console.log(res[0]);
        client.end();
    });
    res.json(movies)
});

app.use(history())
//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});



app.listen(port);
console.log(`app is listening on port: ${port}`);
console.log(process.env.DATABASE_URL);