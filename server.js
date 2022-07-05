const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const port = process.env.PORT || 8080;

// Connection to the database
const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://feqbdwlhikczsq:ed27e3a787ef7424281e1c4159c7ae17af1af0a05d3a4f0b4e3253832dba1db6@ec2-23-23-151-191.compute-1.amazonaws.com:5432/d9kgl81b68kl2n',
  ssl: {
    rejectUnauthorized: false
  }
});


//
const app = express();

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
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