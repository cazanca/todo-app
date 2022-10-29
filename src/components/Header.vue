<script setup>
import Container from './Container.vue'
import { useAppStore } from '../store/app'
import { useTodo } from '../store/todo'
import { ref } from 'vue';

const appStore = useAppStore()
const todoStore = useTodo()

const toggle = () => {
  document.querySelector('html').classList.toggle('dark-mode')
  appStore.update()
}

const todo = ref('')
const addTodo = () => {
  if (todo.value === '') {
    alert('The field can not be empty')
    return
  }

  todoStore.addTodos(todo.value)
  todo.value = ''
}
</script>

<template>
 <div class="header">
    <Container>
      <div class="wrap">
        <div class="title">
          <h1>TODO</h1>
          <button class="toggle" @click="toggle()">
            <img v-if="appStore.dark" src="/icon-sun.svg" alt="Toggle Mode">
            <img v-if="!appStore.dark" src="/icon-moon.svg" alt="Toggle Mode">
          </button>
        </div>
        <form @submit.prevent="addTodo" class="input-wrap">
          <div class="circle">
            <span>&nbsp;</span>
          </div>
          <input type="text" placeholder="Create a new todo.." v-model="todo">
        </form>
      </div>
    </Container>
  </div>
</template>

<style>

</style>
