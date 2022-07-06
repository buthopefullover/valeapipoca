const express = require("express");
// const history = require("connect-history-api-fallback")
// const serveStatic = require("serve-static");
// const path = require("path");
const port = 30000 || 8081;

// Connection to the database
const { Client } = require('pg');
const client = new Client({
    host: 'ec2-23-23-151-191.compute-1.amazonaws.com',
    port: 5432,
    user: 'feqbdwlhikczsq',
    password: 'ed27e3a787ef7424281e1c4159c7ae17af1af0a05d3a4f0b4e3253832dba1db6',
    database: 'd9kgl81b68kl2n',
    ssl: {
        rejectUnauthorized: false
    }
});

//
var cors = require('cors');
const app = express();

app.use(cors());

app.get('/movies', function (req, result){

      client.connect();
      client.query(`select * from movie fetch first 1 row only`, (err, res) => {
          if(!err){
              console.log(res.rows);
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