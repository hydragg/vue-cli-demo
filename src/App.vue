<template>
  <div id="app">
    <b-nav tabs>
        <b-nav-item><router-link to="/hello">Go to Hello</router-link></b-nav-item>
        <b-nav-item active><router-link to="/c2f">Go to C2F</router-link></b-nav-item>
        <b-nav-item><router-link to="/learn-component">Go to learnComponent</router-link></b-nav-item>
        <b-nav-item><router-link to="/count">Go to Count</router-link></b-nav-item>
        <b-nav-item><router-link to="/todo">Go to Todo</router-link></b-nav-item>
    </b-nav>
    <!--<img src="./assets/logo.png">-->
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
}
</style>
