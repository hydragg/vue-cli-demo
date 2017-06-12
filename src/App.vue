<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/hello">Go to Hello</router-link>
      <router-link to="/c2f">Go to C2F</router-link>
      <router-link to="/learn-component">Go to learnComponent</router-link>
    </div>
    <router-view></router-view>
  </div>
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
  margin-top: 60px;
}
</style>
