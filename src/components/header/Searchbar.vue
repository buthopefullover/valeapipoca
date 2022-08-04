<template>
    <div class="mt-5 flex">
       <input type="text"
            class="rounded-full bg-gray-600 px-5 w-50 h-10 mr-3 focus:outline-shawod"
            placeholder="Search..."
            @input="debounceSearch"
        />
        <img src="@/assets/images/avatar.png" alt="" class="h-10 rounded-full" />
    </div>
</template>

<script>

export default {

    methods: {
        debounceSearch (event) {
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                this.fetchSearch(event.target.value)
            }, 600);
        },
        fetchSearch(term) {
            console.log(term);
            this.$router.push('/films/popularity/'+term);


        }
    },


};
</script>

<style>

</style>
