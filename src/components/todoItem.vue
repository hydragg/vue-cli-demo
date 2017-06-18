<template lang="pug">
  li
    div(v-if="!editorMode")
      label
        input(type="checkbox" :checked="todo.done" @change="toggleTodo(todo.key)")
        span {{ todo.content }}
        button.btn.btn-xs.btn-success(@click="showEditMode")
          span.glyphicon.glyphicon-edit
    div(v-if="editorMode")
      input(type="text" 
            v-focus="editorMode" 
            placeholder="edit todo" 
            :value="todo.content" 
            @keyup.enter="actionEdit"
            @blur="cancelEdit"
            @keyup.esc="cancelEdit")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data: function() {
      return {
        editorMode: false
      }
    },
    props: {
      todo: Object
    },
    directives: {
      focus(el, { value }, { context }) {
        if (value) {
          context.$nextTick(() => {
            el.focus()
          })
        }
      }
    },
    methods: {
      ...mapActions([
        'toggleTodo',
        'deleteTodo',
        'updateTodo'
      ]),
      showEditMode() {
        this.editorMode = true
      },
      actionEdit(e) {
        let userInput = e.target.value.trim()
        this.updateTodo({
          key: this.todo.key,
          change: userInput
        })
        this.editorMode = false
      },
      cancelEdit() {
        this.editorMode = false
      }
    }
  }
</script>

<style lang="sass">

</style>
