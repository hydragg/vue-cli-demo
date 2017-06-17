<template lang="pug">
  .container
    h2 count: 
      span {{ count }}
    input(type="number" v-model="num")
    button(@click="actionIncrease(num)") +
    button(@click="actionDecrease(num)") -
    button(@click="actionCountReset") Reset
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      num: 1
    }
  },
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  },
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionCountReset'
    ])
  }
}
</script>


<style>

</style>
