<template lang="pug">
  .container
    h2 count: 
      span {{ count }}
    button(@click="actionIncrease") +
    button(@click="actionDecrease") -
    button(@click="actionCountReset") Reset
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
