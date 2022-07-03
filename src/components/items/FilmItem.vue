<template>
    <div >
        <Tooltip text="Joker">
            <router-link to="/film/11">
                <img 
                    src="@/assets/images/joker.jpg" 
                    class="hover:border-4 hover:border-indigo-500/100" 
                />
            </router-link>
        </Tooltip>  
    </div>
</template>

<script>
    import Tooltip from './Tooltip';
    export default {
        components: { 
            Tooltip,
        },
    }
</script>

<style>
</style>
