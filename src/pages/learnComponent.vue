<template lang="pug">
  .learn-component
    jumbotron(:header="header" :lead="lead" :text="text")
    .row  
      container(v-for="item in items" :item="item" :key="item.id")
</template>

<script>
import jumbotron from '@/components/jumbotron'
import container from '@/components/container'
export default {
  data: function() {
    return {
      items: [
        {
          id: 1,
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          id: 2,
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          id: 3,
          title: 'Heading',
          info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »'
        },  
      ],
      header: 'Hello Vue!!',
      lead: 'Bootstrap 4 Components for Vue',
      text: 'For more infomation visit website'
    }
  },
  components: {
    container,
    jumbotron
  }  
}
</script>


<style>

</style>
