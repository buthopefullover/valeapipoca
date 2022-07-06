import axios from 'axios';

// the single Axios instance we use for calls
const apiClient = axios.create({
  baseURL: process.env.DATABASE_URL,
  // baseURL: process.env.DATABASE_URL, // with ssl?
  withCredentials: false, // this is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});



export default {
  /* with pagination */
  getMovies() {
    return apiClient.get('/movies').then((response) => {
      console.log(response.data);
    });
  },
};