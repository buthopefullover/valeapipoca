<template>
  <div id="nav">
      <router-view :key="$route.path"/>
  </div> 
</template>

<script>

  export default {
    name: 'App', 
  }
</script>

<style>

</style>
