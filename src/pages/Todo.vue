<template lang="pug">
  .todo
    h2 TodoList:
    input(type="text" placeholder="Add todo" v-model="newTodo" @keyup.enter="addTodo")
    ul
      li(v-for="todo in todos") {{ todo.content }}
</template>



<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters({
      todos: 'getTodos'
    })
  },
  methods: {
    // ...mapActions([
    //   'actionAddTodo'
    // ])
    addTodo() {
      if (this.newTodo === '') return
      this.$store.dispatch('actionAddTodo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>



<style lang="sass">
  .todo 
    width: 400px
    margin: 0 auto
    h2
      margin: 10px 
    input
      margin: 10px
    ul
      width: 50%
      margin: 0 auto
      li
        list-style: square
</style>

