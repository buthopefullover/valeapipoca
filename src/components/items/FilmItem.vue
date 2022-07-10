<template>
    <div >
        <Tooltip :text="movie.title">
            <router-link :to="`/film/${movie.movie_id}`">
                <img 
                    :src="posterPath" 
                    class="hover:border-4 hover:border-indigo-500/100" 
                />
            </router-link>
        </Tooltip>  
    </div>
</template>

<script>
    import Tooltip from './Tooltip';
    export default {
        props: {
            movie: {
                required: true
            }
        },

        computed: {
            posterPath() {
                return "https://image.tmdb.org/t/p/w500/" +this.movie.poster_path;
            }
        },  
        components: { 
            Tooltip,
        },
    }
</script>

<style>
</style>
