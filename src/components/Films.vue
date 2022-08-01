<template>
    <div class="bg-eerie_black">
        <Navbar />
    </div>
    <div class="justify-end flex mr-5 mt-5">
        <DropdownMenu
            v-model="show"
            :right="right"
            :hover="hover"
            :interactive="interactive"
            :transition="transition ? 'translate-fade-down':''"
            :closeOnClickOutside="closeOnClickOutside"
            
        >
            <template v-slot:default>
                <button class="filter rounded-lg px-4 py-2 btn-primary dropdown-toggle">
                    <span>DECADE</span>
                    <svg class="w-4 h-4 ml-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </button>
            </template>
            

            <template v-slot:dropdown>
                <a class="dropdown-item filter" href="#">Tudo</a>
                <a class="dropdown-item filter" href="#">2020</a>
                <a class="dropdown-item filter" href="#">2010</a>
                <a class="dropdown-item filter" href="#">2000</a>
                <a class="dropdown-item filter" href="#">1990</a>
                <a class="dropdown-item filter" href="#">1980</a>
                <a class="dropdown-item filter" href="#">1970</a>
                <a class="dropdown-item filter" href="#">1960</a>
                <a class="dropdown-item filter" href="#">1950</a>
                <a class="dropdown-item filter" href="#">1940</a>
                <a class="dropdown-item filter" href="#">1930</a>
                <a class="dropdown-item filter" href="#">1920</a>
                <a class="dropdown-item filter" href="#">1910</a>
                <a class="dropdown-item filter" href="#">1900</a>
            </template>
        </DropdownMenu>
        <DropdownMenu
            v-model="show"
            :right="right"
            :hover="hover"
            :interactive="interactive"
            :transition="transition ? 'translate-fade-down':''"
            :closeOnClickOutside="closeOnClickOutside"
            
        >
            <template v-slot:default>
                <button class="filter rounded-lg px-8 py-2 btn-primary dropdown-toggle">GENRES</button>
            </template>
            

            <template v-slot:dropdown>
                <a class="dropdown-item filter" href="#">Popularity</a>
                <a class="dropdown-item filter">Film Name</a>
                <a class="dropdown-item filter" href="#">Release Date</a>
            </template>
        </DropdownMenu>
        <DropdownMenu
            v-model="show"
            :right="right"
            :hover="hover"
            :interactive="interactive"
            :transition="transition ? 'translate-fade-down':''"
            :closeOnClickOutside="closeOnClickOutside"
            
        >
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
                <a class="dropdown-item filter" href="#">Release Date</a>
            </template>
        </DropdownMenu>
        
    </div>
    <div class="mt-2">
        <h1>There are x movies.</h1>
    </div>
    
            
    <div>
            
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 z-20" gap-0>
            <FilmItem :key="movie.movie_id" v-for="movie in movies" :movie="movie"/>
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
            };
        },
         methods: {
            async fetchFilms(page) {
                try{
                    const response = await UserService.getMovies(page, this.$route.params.sort);
                    this.movies = response.data.movies;
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
