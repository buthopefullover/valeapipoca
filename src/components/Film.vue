<template>
        <div class="shadow-blur bg-[url('@/assets/images/still.jpg')] bg-no-repeat container mx-auto h-[34rem]">
            <Navbar />
            <div class="container mx-auto flex mt-96 ml-24">
                <img src="@/assets/images/joker.jpg" class="w-64"/>
                <div class="ml-24 mr-96">
                    <h1 class="text-4xl font-semibold text-white">Joker</h1>
                    <span>2019 Directed by Todd Phiollips</span>
                    <p class="mt-5">PUT ON A HAPPY FACE.</p>
                    <p class="mt-3">
                        During the 1980s, a failed stand-up comedian is 
                        driven insane and turns to a life of crime and chaos 
                        in Gotham City while becoming an infamous 
                        psychopathic crime figure.
                    </p>
                </div>
            </div>
        </div>

    
</template>

<script>
    import Navbar from "./header/Navbar"
    export default {
        components: {
            Navbar,
        },
    }
</script>

<style>
</style>
