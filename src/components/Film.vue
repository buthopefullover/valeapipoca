<template>
    <div style="background-repeat: no-repeat; background-size: cover;" class="shadow-blur container mx-auto h-[34rem]"
        :style="{backgroundImage: `url('${backdropPath}')`}">
        <Navbar />
        <div class="container mx-auto flex mt-96 ">
            <img :src="posterPath" class="w-64 ml-16" style="height: fit-content" />
            <div class="ml-24 mr-96">
                <h1 class="text-4xl font-semibold text-white">{{ this.movie.title }}</h1>
                <span>2019 Directed by Todd Phiollips</span>
                <p class="mt-5 uppercase ">{{ this.movie.tagline }}</p>
                <p class="mt-3">
                    {{ this.movie.overview }}
                </p>
                <div class="grid gap-4 grid-cols-3 mt-6 mb-6 border-b border-gray-500 content-around">
                    <router-link :to="`/film/${this.movie.movie_id}`">
                        <a :class="`text-3xl font-semibold text-red-500`">Cast</a>
                    </router-link>

                </div>

                <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-2 z-20" gap-0>
                    <CastItem :key="person.id" v-for="person in cast" :person="person" />
                </div>

                <div class="grid gap-4 grid-cols-3 mt-6 mb-6 border-b border-gray-500 content-around">

                    <router-link :to="`/film/${this.movie.movie_id}/crew`">
                        <a :class="`text-3xl font-semibold text-red-500`">Crew</a>
                    </router-link>
                </div>
                <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-2 z-20" gap-0>
                    <CrewItem :key="person.id" v-for="person in crew" :person="person" />
                </div>

                <div class="grid gap-4 grid-cols-3 mt-6 mb-6 border-b border-gray-500 content-around">

                    <router-link :to="`/film/${this.movie.movie_id}/review`">
                        <a :class="`text-3xl font-semibold text-red-500`">Review</a>
                    </router-link>
                </div>
                <div class="grid gap-4 grid-cols-1 mt-2 z-20" gap-0>
                    <ReviewItem :key="review.review_id" v-for="review in reviews" :review="review" />
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>


</template>

<script>
    import Navbar from "./header/Navbar"
    import UserService from "@/services/AppService";
    import CastItem from "./items/CastItem";
    import CrewItem from "./items/CrewItem";
    import ReviewItem from "./items/ReviewItem";

    export default {

        data() {
            return {
                movie: [],
                cast: [],
                crew:[],
                reviews: [],
            };
        },
        components: {
            Navbar,
            CastItem,
            CrewItem,
            ReviewItem,
        },
        methods: {
            async fetchInfo() {
                try{
                    const response = await UserService.getMovie(this.$route.params.id);
                    this.movie = response.data.movieInfos[0]
                    this.cast = response.data.movieCast;
                    this.crew = response.data.movieCrew;
                    this.reviews = response.data.reviews;
                } catch (error) {
                    console.log(error);
                }
            }
        },
        computed: {
            posterPath() {
                if (this.movie.poster_path){
                    return "https://image.tmdb.org/t/p/original" +this.movie.poster_path ;
                }
                else {
                    return "https://via.placeholder.com/500x750";
                }
            },
            backdropPath() {
                return "https://image.tmdb.org/t/p/original" +this.movie.backdrop_path;

            },
        },
        async mounted() {
            this.fetchInfo();

        },
    }
</script>

<style>
</style>
