<template lang="pug">
  .c2f
    h3 Celsius: {{ celsius }} °C
    h3 Fahrenheit {{ fahrenheig }} °F
    .temperature-input
      input(v-model.number="userInput")
    .selector
      input(type="radio" id="c2f" value="c2f" v-model="mode")
      label(for="c2f") C2F
      <br>
      input(type="radio" id="f2c" value="f2c" v-model="mode")
      label(for="f2c") F2C
</template>

<script>
  export default {
    data() {
      return {
        userInput: 0,
        mode: 'c2f'
      }
    },
    computed: {
      celsius() {
        return this.mode == 'c2f' ? this.userInput : (this.fahrenheig - 32) * 5/9
      },
      fahrenheig() {
        return this.mode != 'c2f' ? this.userInput : this.celsius * 9/5 + 32
      }
    }
  }
</script>

<style>
  
</style>
