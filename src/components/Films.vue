<template>
    <div class="bg-eerie_black">
        <Navbar />
    </div>
    
    <div class="mx-5">
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-5" gap-0>
            <FilmItem :key="movie.id" v-for="movie in movies" :movie="movie"/>
        </div>
        <div class="text-center mt-5">
            <a href="" v-on:click.prevent="previous()">
                Previous
            </a>
            <a href="" v-on:click.prevent="next()" class="ml-5">
                Next
            </a>
        </div>
        
    </div>
</template>

<script>
    let currentPage = 1;
    import Navbar from "./header/Navbar"
    import FilmItem from "./items/FilmItem"
    import UserService from "@/services/UserService";
    export default {
        components: { 
            Navbar,
            FilmItem,
        },
        data: function() {
            return {
                movies:[],
            };
        },
         methods: {
            async fetchFilms(page) {
                try{
                    const response = await UserService.getMovies(page);
                    this.movies = response.data;
                    console.log(this.movies)
                } catch (error) {
                    console.log(error);
                }
            },
            next() {
                currentPage += 1;
                console.log(currentPage)
                this.fetchFilms(currentPage);
            },
            previous() {
                currentPage -= 1;
                console.log(currentPage)
                this.fetchFilms(currentPage);
            }
        }, 
        async mounted() {
            this.fetchFilms(currentPage);
        },
    }
</script>

<style>
</style>
