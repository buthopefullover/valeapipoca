<template>
    <div class="h-20 flex justify-between container mx-auto">
        <!--logo and buttons-->
        <div class="flex">
            <img src="@/assets/images/logo.png" alt=""/>
            <ul class="flex mt-5">
                <li>
                    <router-link to="/films/popularity" class="ml-5">
                        Films
                    </router-link>
                </li>
                <li>
                    <router-link to="/actors" class="ml-5">
                        Actorsss
                    </router-link>
                </li>
                <li>
                    <router-link to="/profile" class="ml-5">
                        Profile
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
