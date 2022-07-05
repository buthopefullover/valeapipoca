const express = require("express");
const morgan = require('morgan')
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

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.use(morgan('combined'));
app.get('/', (req, res) =>{
  res.send('SOCORRO PELO AMOR')
});

app.get('/movies', function (req, res){
    let movies = [];
    client.connect();
    client.query('SELECT * FROM movies;', (err, res) => {
        if (err) throw err;
        movies = res;

        client.end();
    });
    res.json(movies)
});

app.listen(port);
console.log(`app is listening on port: ${port}`);