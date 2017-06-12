<template lang="pug">
  b-jumbotron(:header="header" :lead="lead")
    p {{ text }}
    b-button(variant="primary" href="#") Docs 
</template>

<script>
export default {
  props:{
    header: String,
    lead: String,
    text: String
  }
}
</script>

<style>

</style>
