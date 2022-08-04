<template>
    <div class="bg-eerie_black">
        <Navbar />
    </div>

    <div class="mx-auto">
        <div class="mx-5">
             <h2 class="uppercase mt-5 text-lg font-semibold">
                Popular on Letterboxd
            </h2>
        </div>

    </div>
</template>

<script>
    import Navbar from "./header/Navbar"
    export default {
        components: {
            Navbar,
        },
    async mounted() {
        this.$router.push('/films/popularity/' );

    },
    }

</script>

<style>

</style>
