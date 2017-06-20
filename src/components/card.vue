<template lang="pug">
  .card
    i.wi(:class="weather.weatherIcon")
    p {{ date }}, {{ dayCh }}
    p {{ weather.weatherTextCh }}, {{ celsius }}°C
</template>

<script>
export default {
  props: {
    weatherTextEn: String,
    temp: String,
    date: String,
    day: String
  },
  computed: {
    celsius: function() {
      return ((this.temp - 32) * 5/9).toFixed(1)
    },
    dayCh: function() {
      let str = ''
      switch (this.day) {
        case 'Mon':
          str = '星期一';
          break;
        case 'Tue':
          str = '星期二';
          break;
        case 'Wed':
          str = '星期三';
          break;
        case 'Thu':
          str = '星期四';
          break;
        case 'Fri':
          str = '星期五';
          break;
        case 'Sat':
          str = '星期六';
          break;
        case 'Sun':
          str = '星期日';
          break;
      }
      return str
    },
    weather: function() {
      let weatherTextCh = ''
      let weatherIcon = ''
      switch (this.weatherTextEn) {
        case 'Thunderstorms':
          weatherTextCh = '雷雨';
          weatherIcon = 'wi-thunderstorm';
          break;
        case 'Showers':
          weatherTextCh = '陣雨';
          weatherIcon = 'wi-showers';
          break;
        case 'Mostly Cloudy':
          weatherTextCh = '晴時多雲';
          weatherIcon = 'wi-day-cloudy';
          break;
        case 'Scattered Showers':
          weatherTextCh = '局部陣雨';
          weatherIcon = 'wi-sprinkle';
          break;
        case 'Partly Cloudy':
          weatherTextCh = '局部有雲';
          weatherIcon = 'wi-day-cloudy-high';
          break;
        case 'Rain':
          weatherTextCh = '雨天';
          weatherIcon = 'wi-rain';
          break;
        case 'Cloudy':
          weatherTextCh = '多雲';
          weatherIcon = 'wi-cloudy';
          break;
        case 'Mostly Sunny':
          weatherTextCh = '晴偶有雲';
          weatherIcon = 'wi-day-sunny';
          break;
        case "Sunny":
          weatherTextCh = '晴天';
          weatherIcon = 'wi-day-sunny';
          break;
        default:
          weatherTextCh = '多雲';
          weatherIcon = 'wi-cloudy';
          break;
      }
      return {
        weatherTextCh,
        weatherIcon
      }
    }
  }
}
</script>

<style lang="sass">
  .card 
    width: 200px
    height: 150px
    font-size: 1.4rem
    margin: 30px 28px
    padding: 10px 0px 0px 0px
    box-shadow: 1px 1px 5px gray
    transition: box-shadow 1s
    p
      margin: 15px
    &:hover 
      box-shadow: 14px 14px 20px gray
</style>
