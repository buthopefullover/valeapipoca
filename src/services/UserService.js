import axios from 'axios';

// the single Axios instance we use for calls
const apiClient = axios.create({
  baseURL: process.env.DBURL,
  // baseURL: process.env.DATABASE_URL, // with ssl?
  withCredentials: false, // this is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});



export default {
  /* with pagination */
  getMovies(page, sort) {
    return apiClient.get(`/movies/${sort}/${page}`)
  },
  getMovie(id) {
    return apiClient.get(`/movie/${id}`)
  },

};