<template>
    <div >
        <Tooltip :text="actor.name">
            <router-link :to="`/person/${actor.person_id}`">
                <img
                    :src="profilePath"
                    class="hover:border-4 hover:border-indigo-500/100"
                />
            </router-link>
        </Tooltip>
    </div>
</template>

<script>
    import Tooltip from './Tooltip';
    export default {
        props: {
            actor: {
                required: true
            }
        },

        computed: {
            profilePath() {
                if (this.actor.profile_path){
                    return "https://image.tmdb.org/t/p/w500/" +this.actor.profile_path;
                }
                else {
                    return "https://via.placeholder.com/500x750";
                }

            }
        },
        components: {
            Tooltip,
        },
    }
</script>

<style>
</style>
