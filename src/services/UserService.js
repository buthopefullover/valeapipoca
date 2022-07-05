import axios from 'axios';

// the single Axios instance we use for calls
const apiClient = axios.create({
  //baseURL: 'http://localhost:5000',
  baseURL: 'postgres://feqbdwlhikczsq:ed27e3a787ef7424281e1c4159c7ae17af1af0a05d3a4f0b4e3253832dba1db6@ec2-23-23-151-191.compute-1.amazonaws.com:5432/d9kgl81b68kl2n', // with ssl?
  withCredentials: false, // this is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});



export default {
  /* with pagination */
  getMovies() {
    console.log(process.env.DATABASE_URL);
    return apiClient.get('/movies');
  },
};