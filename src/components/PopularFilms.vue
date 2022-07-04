<template>
    <div class="mx-5">
        <h2 class="uppercase mt-5 text-lg font-semibold">
            Popular on Letterboxd
        </h2>
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-5" gap-0>
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
        </div>
    </div>
</template>

<script>
    import FilmItem from "./items/FilmItem"
    export default {
        components: { 
            FilmItem,
        },
        
    }
</script>

<style>
</style>
