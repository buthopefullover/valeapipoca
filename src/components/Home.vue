<template>
    <div class="bg-eerie_black">
        <Navbar />
    </div>
    
    <div class="mx-auto">
        <PopularFilms />
    </div>
</template>

<script>
    import PopularFilms from "./PopularFilms"
    import Navbar from "./header/Navbar"
    export default {
        components: {
            PopularFilms,
            Navbar,
        },
    }
</script>

<style>

</style>
