import axios from 'axios';
import qs from 'qs'

export default {
  /* with pagination */
  getMovies(page, sort) {
    var data
    switch (sort){
      case "name":
        console.log('aqui')
        data = qs.stringify({
          'method': 'getMovies',
          'page': page,
          'titleFilter': '',
          'yearFilter': '',
          'statusFilter': '',
          'genderFilter': '',
          'order': '0' 
        });
        break;
      default:
        console.log('ali')
        data = qs.stringify({
          'method': 'getMovies',
          'page': page,
          'titleFilter': 'stran',
          'yearFilter': '',
          'statusFilter': '',
          'genderFilter': '',
          'order': '' 
        });
        break;
    }
    
    var config = {
      method: 'post',
      url: 'https://valeapipoca-api.digitalnvm.com/',
      headers: { },
      data : data
    };

    return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  },
  getMovie(id) {
    var data = qs.stringify({
      'method': 'getMovieInfo',
      'movie_id': id
    });
    var config = {
      method: 'post',
      url: 'https://valeapipoca-api.digitalnvm.com/',
      headers: { },
      data : data
    };
    
    return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  },

};

