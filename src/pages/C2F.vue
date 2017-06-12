<template lang="pug">
  .c2f
    h3 Celsius: {{ celsius }} °C
    h3 Fahrenheit {{ fahrenheig }} °F
    .userInput
      b-form-input(v-model.number="userInput" maxlength="8")
    b-form-radio(v-model="mode" :options="options")
</template>

<script>
  export default {
    data() {
      return {
        userInput: 0,
        mode: 'c2f',
        options: [
          {
            text: 'C2F',
            value: 'c2f'
          },
          {
            text: 'F2C',
            value: 'f2c'
          }
        ]
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
  .c2f {
    width: 100%;
  }
  .userInput {
    width: 100px;
    margin: 0 auto;
  }
</style>
