const express = require("express");
require('dotenv').config()
// const history = require("connect-history-api-fallback")
// const serveStatic = require("serve-static");
// const path = require("path");
const port = 30000 || 8081;

// Connection to the database
const { Pool } = require('pg');
const client = new Pool({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    ssl: {
        rejectUnauthorized: false
    }
});

//
var cors = require('cors');
const app = express();

app.use(cors());

app.get('/movies/:sort/:page', function (req, result){
    let offset = (req.params.page-1) * 12;
    client.connect();
    console.log(req.params.sort)
    switch (req.params.sort) {
        case 'name':
            console.log('entrei')
            client.query(`SELECT * FROM movie ORDER BY title ASC LIMIT 12 OFFSET ${offset}`, (err, res) => {
                if(!err){
                    result.status(200).send(res.rows);
                }else {
                    console.log(res.message);
                }
        
            })
            break;
        default:
            console.log('default')
            client.query(`SELECT * FROM movie LIMIT 12 OFFSET ${offset}`, (err, res) => {
                if(!err){
                    result.status(200).send(res.rows);
                }else {
                    console.log(res.message);
                }
        
            })
            break;
    }
  client.end;
});

app.get('/movie/:movieId', function (req, result){

    client.connect();

    client.query(`select * from movie where movie_id = ${req.params.movieId}`, (err, res) => {
        if(!err){
            console.log('tudo certo')
            result.status(200).send(res.rows);
        }else {
            console.log(res.message);
        }

    })
  client.end;
});


/*
app.use(history())
//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));
*/
// this * route is to serve project on different page routes except root `/`

app.listen(port);
console.log(`app is listening on port: localhost:${port}`);