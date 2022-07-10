import axios from 'axios';

// the single Axios instance we use for calls
const apiClient = axios.create({
  baseURL: 'http://localhost:30000',
  // baseURL: process.env.DATABASE_URL, // with ssl?
  withCredentials: false, // this is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});



export default {
  /* with pagination */
  getMovies(page) {
    return apiClient.get(`/movies/${page}`)
  },
  getMovie(id) {
    return apiClient.get(`/movie/${id}`)
  },

};