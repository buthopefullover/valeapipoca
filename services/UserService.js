import axios from 'axios';

// Connection to the database
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


export default {
  /* with pagination */
  getMovies() {
    let movies = [];
    client.connect();
    client.query('SELECT original_title FROM movie;', (err, res) => {
      if (err) throw err;
      movies = res;
      client.end();
    });

    return movies
  },
};