<template lang="pug">
  .c2f
    h3 Celsius: {{ celsius }} °C
    h3 Fahrenheit {{ fahrenheig }} °F
    .temperature-input
      input(v-model.number="celsius" placeholder="Celsius")
    //- .selector
    //-   input(type="radio" id="c2f" value="c2f" v-model="mode")
    //-   label(for="c2f") C2F
    //-   input(type="radio" id="f2c" value="f2c" v-model="mode")
    //-   label(for="f2c") F2C
</template>

<script>
  export default {
    data() {
      return {
        celsius: 0,
        //mode: 'c2f'
      }
    },
    computed: {
      fahrenheig() {
        return this.celsius * 9/5 + 32;
      }
    }
  }
</script>

<style>
  
</style>
