import axios from 'axios';
import qs from 'qs'

export default {
    /* with pagination */
    getMovies(page, sort, search) {
        var data;
        var params = {
            method: "getMovies",
            page: page,
        };
        if (search != "") {
            params.titleFilter = search;
        }

        switch (sort) {
            case "name":
                params.order = "1";
                break;
            case "genre":
                params.genderFilter = search;
                params.titleFilter = "";
                break;
            case "release":
                params.order = "2";
                params.statusFilter = "Released";
                break;
            default:
                params.order = "";
                break;
        }

        data = qs.stringify(params);

        var config = {
            method: "post",
            url: "https://valeapipoca-api.digitalnvm.com/",
            headers: {},
            data: data,
        };

        return axios(config)
            .then(function(response) {
                console.log(JSON.stringify(response.data.currentSql));
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    getActors(page) {
        var data;
        var params = {
            method: "getActors",
            page: page,
        };

        data = qs.stringify(params);

        var config = {
            method: "post",
            url: "https://valeapipoca-api.digitalnvm.com/",
            headers: {},
            data: data,
        };

        return axios(config)
            .then(function(response) {
                console.log(
                    JSON.stringify(response.data.currentSql)
                );
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    getMovie(id) {
        var data = qs.stringify({
            method: "getMovieInfo",
            movie_id: id,
        });
        var config = {
            method: "post",
            url: "https://valeapipoca-api.digitalnvm.com/",
            headers: {},
            data: data,
        };

        return axios(config)
            .then(function(response) {
                console.log(
                    JSON.stringify(response.data.movieSql)
                );
                console.log(JSON.stringify(response.data.castSql));

                console.log(JSON.stringify(response.data.crewSql));
                console.log(JSON.stringify(response.data.reviewSql));

                return response;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    getPerson(id) {
        var data = qs.stringify({
            method: "getPersonInfo",
            person_id: id,
        });
        var config = {
            method: "post",
            url: "https://valeapipoca-api.digitalnvm.com/",
            headers: {},
            data: data,
        };

        return axios(config)
            .then(function(response) {
                console.log(JSON.stringify(response.data.currentSql));
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
};