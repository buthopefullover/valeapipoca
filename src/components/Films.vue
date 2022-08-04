<template>
    <div class="bg-eerie_black">
        <Navbar />
    </div>
    <div class="justify-end flex mr-5 mt-5">
        <DropdownMenu v-model="show" :right="right" :hover="hover" :interactive="interactive"
            :transition="transition ? 'translate-fade-down':''" :closeOnClickOutside="closeOnClickOutside">
            <template v-slot:default>
                <button class="filter rounded-lg px-8 py-2 btn-primary dropdown-toggle">GENRES</button>
            </template>


            <template v-slot:dropdown>
                <router-link to="/films/genre/12">
                    <a class="dropdown-item filter" href="#">Adventure</a>
                </router-link>
                <router-link to="/films/genre/14">
                    <a class="dropdown-item filter" href="#">Fantasy</a>
                </router-link>
                <router-link to="/films/genre/16">
                    <a class="dropdown-item filter" href="#">Animation</a>
                </router-link>
                <router-link to="/films/genre/18">
                    <a class="dropdown-item filter" href="#">Drama</a>
                </router-link>
                <router-link to="/films/genre/27">
                    <a class="dropdown-item filter" href="#">Horror</a>
                </router-link>
                <router-link to="/films/genre/28">
                    <a class="dropdown-item filter" href="#">Action</a>
                </router-link>
                <router-link to="/films/genre/35">
                    <a class="dropdown-item filter" href="#">Comedy</a>
                </router-link>
            </template>
        </DropdownMenu>
        <DropdownMenu v-model="show" :right="right" :hover="hover" :interactive="interactive"
            :transition="transition ? 'translate-fade-down':''" :closeOnClickOutside="closeOnClickOutside">
            <template v-slot:default>
                <button class="filter rounded-lg px-8 py-2 btn-primary dropdown-toggle">SORT BY</button>
            </template>


            <template v-slot:dropdown>
                <router-link to="/films/popularity">
                    <a class="dropdown-item filter" href="#">Popularity</a>
                </router-link>
                <router-link to="/films/name">
                    <a class="dropdown-item filter">Film Name</a>
                </router-link>
                <router-link to="/films/release">
                    <a class="dropdown-item filter" href="#">Release Date</a>
                </router-link>
            </template>
        </DropdownMenu>

    </div>
    <div class="mt-2">
        <h1 class="text-center text-white mb-12">There are {{this.total}} movies.</h1>
    </div>


    <div>

        <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 z-20" gap-0>
            <FilmItem :key="movie.movie_id" v-for="movie in movies" :movie="movie" />
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
    import DropdownMenu from "./items/DropdownMenu"
    import UserService from "@/services/AppService";
    export default {
        components: {
            Navbar,
            FilmItem,
            DropdownMenu,
        },
        data: function() {
            return {
                show: false,
                right: false,
                hover: false,
                interactive: false,
                transition: false,
                closeOnClickOutside: true,
                movies:[],
                total:0,
            };
        },
         methods: {
            async fetchFilms(page) {
                try{
                    var search = (this.$route.params.search);
                    if(search==null)
                        search="";
                    const response = await UserService.getMovies(page, this.$route.params.sort, search);
                    this.movies = response.data.movies;
                    this.total = response.data.total
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
.filter {
    box-sizing: border-box;
  background-color: #16191c;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  align-items:center;/*Vertical align*/
  justify-content:center;/*horizontal align*/
}

.dropdown-item {
    background-color: #8899aa;
}

</style>
