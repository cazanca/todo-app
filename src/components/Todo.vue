<script setup>
import { useTodo } from '../store/todo'

defineProps({
  todo: Object
})

const store = useTodo()

const toggleDone = (todo) => {
    todo.isFinished = !todo.isFinished
}

</script>

<template>
    <div class="todo" :class="{ completed: todo.isFinished }">
        <div class="circle" @click="toggleDone(todo)">
            <span>&nbsp;</span>
        </div>
        <p class="body">{{todo.text}}</p>
        <button class="delete" @click="store.removeTodo(todo)">
            <img src="/icon-cross.svg" alt="Delete">
        </button>
    </div>
</template>