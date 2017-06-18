<template lang="pug">
  .container.todo
    h1 Vue & Vuex Todo List example
    .row
      .col-lg-3.col-lg-offset-3.col-sm-12
        h2 Todo List:
        .input-group
          input.form-control(type="text" placeholder="Add todo" v-model="newTodo" @keyup.enter="addTodo")
          span.input-group-btn
            button.btn.btn-success(type="button" @click="addTodo") 
              span.glyphicon.glyphicon-plus
        ul
          todoItem(v-for="(todo, index) in todolist" :todo="todo" :key="index")
      .col-lg-3.col-sm-12
        h2 Done List:
        ul
          li(v-for="todo in donelist") 
            label 
              input(type="checkbox" :checked="todo.done" @change="toggleTodo(todo.key)") 
              span {{ todo.content }}
            button.btn.btn-xs.btn-danger(@click="deleteTodo(todo.key)")
              span.glyphicon.glyphicon-trash
</template>



<script>
import { mapGetters, mapActions } from 'vuex'
import todoItem from '@/components/todoItem'

export default {
  components: { todoItem },
  data: function() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters({
      todolist: 'getTodos',
      donelist: 'getDone'
    })
  },
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo'
    ]),
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
    font-size: 20px
    margin: 20px
    h1
      margin: 20px
    li 
      list-style: none
      margin: 5px
      span 
        margin: 3px
</style>

