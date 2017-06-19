<template lang="pug">
  .weather
    h1 {{ city }} Weather
    .day
      card(v-for="(day, index) in weekend" 
           :date="day.date"
           :day="day.day"  
           :temp="day.high"
           :weatherTextEn="day.text"
           :key="index"
      )
</template>

<script>
  import axios from 'axios'
  import card from '@/components/card'

  const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taiwan%2C%20tnn%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  
  export default {
    data: function() {
      return {
        city: '',
        today: '',
        weekend: ''
      }
    },
    created() {
      axios.get(url)
      .then(response => {
        this.today = response.data.query.results.channel.item.condition
        this.city = response.data.query.results.channel.location.city
        this.weekend = response.data.query.results.channel.item.forecast
        console.log(this.today, this.weekend, this.city)
      })
      .catch(err => {
        console.error(err)
      })
    },
    components: { card }
  }
</script>

<style lang="sass">
  .weather
    width: 100%
    .day 
      display: flex
      flex-flow: row wrap
</style>
