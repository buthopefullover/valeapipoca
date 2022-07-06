
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

client.connect();
client.query(`select * from movie fetch first 1 row only`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    client.end();
})
