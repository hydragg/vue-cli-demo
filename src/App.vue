<template lang="pug">
  #app
    b-nav(tabs)
      b-nav-item
        router-link(to="/hello") Hello
      b-nav-item
        router-link(to="/c2f") C2F
      b-nav-item
        router-link(to="/learn-component") Learn-Component
      b-nav-item
        router-link(to="/count") Count
      b-nav-item
        router-link(to="/todo") Todo
    router-view 
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50;
}
</style>
