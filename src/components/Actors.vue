<template>
    <div class="bg-eerie_black">
        <Navbar />
    </div>

    <div>

        <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 z-20" gap-0>
            <ActorItem :key="actor.person_id" v-for="actor in actors" :actor="actor" />
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
    import ActorItem from "./items/ActorItem"
    import UserService from "@/services/AppService";
    export default {
        components: {
            Navbar,
            ActorItem,
        },
        data: function() {
            return {
                show: false,
                right: false,
                hover: false,
                interactive: false,
                transition: false,
                closeOnClickOutside: true,
                actors:[],
            };
        },
         methods: {
            async fetchActors(page) {
                try{

                    const response = await UserService.getActors(page);
                    this.actors = response.data.actors;
                } catch (error) {
                    console.log(error);
                }
            },
            next() {
                currentPage += 1;
                console.log(currentPage)
                this.fetchActors(currentPage);
            },
            previous() {
                currentPage -= 1;
                console.log(currentPage)
                this.fetchActors(currentPage);
            }
        },
        async mounted() {
            this.fetchActors(currentPage);
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
