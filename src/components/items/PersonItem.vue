<template>
    <div >
        <Tooltip :text="person.character">
            <router-link :to="`/actors/${person.id}`">
                <a>person.name</a>
            </router-link>
        </Tooltip>  
    </div>
</template>

<script>
    import Tooltip from './Tooltip';
    export default {
        props: {
            person: {
                required: true
            }
        }, 
        components: { 
            Tooltip,
        },
    }
</script>

<style>
</style>
