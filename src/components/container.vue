<template lang="pug">
  .col-md-4
    h2 {{ item.title }}
    p {{ item.info }} 
    b-button(href="#") {{ item.btntext }}
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style>

</style>
