<template>
        <div style="background-repeat: no-repeat; background-size: cover;" class="shadow-blur container mx-auto h-[34rem]" :style="{backgroundImage: `url('${backdropPath}')`}">
            <Navbar />
            <div class="container mx-auto flex mt-96 ml-24">
                <img :src="posterPath" class="w-64"/>
                <div class="ml-24 mr-96">
                    <h1 class="text-4xl font-semibold text-white">{{ this.movie.title }}</h1>
                    <span>2019 Directed by Todd Phiollips</span>
                    <p class="mt-5 uppercase ">{{ this.movie.tagline }}</p>
                    <p class="mt-3">
                        {{ this.movie.overview }}
                    </p>
                </div>
            </div>
        </div>

    
</template>

<script>
    import Navbar from "./header/Navbar"
    import UserService from "@/services/UserService";
    export default {
        data() {
            return {
                movie: [],
            };   
        },
        components: {
            Navbar,
        },
        computed: {
            posterPath() {
                return "https://image.tmdb.org/t/p/original" +this.movie.poster_path ;
            },
            backdropPath() {
                return "https://image.tmdb.org/t/p/original" +this.movie.backdrop_path;
                
            }
        }, 
        async mounted() {
            try{
                const response = await UserService.getMovie(this.$route.params.id);
                console.log(response.data)
                this.movie = response.data[0]
            } catch (error) {
                console.log(error);
            }
            
        },
    }
</script>

<style>
</style>
