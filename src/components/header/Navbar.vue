<template>
    <div class="h-20 flex justify-between container mx-auto">
        <!--logo and buttons-->
        <div class="mt-5 flex">
            <img src="@/assets/images/logo.png" alt=""/>
            <ul class="flex mt-5">
                <li>
                    <router-link to="/films" class="ml-5">
                        Films
                    </router-link>
                </li>
                <li>
                    <router-link to="/actors" class="ml-5">
                        Actors
                    </router-link>
                </li>
                <li>
                    <router-link to="/profile" class="ml-5">
                        Profileeeee
                    </router-link>
                </li>
            </ul>
        </div>
        <!--searchbar-->
        <Searchbar />
    </div>
    
</template>

<script>
  import Searchbar from "./Searchbar"
    export default {
        components: {
            Searchbar,
        },
    }
</script>

<style>

</style>
