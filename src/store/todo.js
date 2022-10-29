import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTodo = defineStore('todo', () => {
    const todos = ref([])
    const filter = ref('all')
    const nextId = ref(0)

    if (localStorage.getItem('todos')) {
        todos.value = JSON.parse(localStorage.getItem('todos'))
    }

    watch(
        todos, 
        (todosValue) => {
            localStorage.setItem('todos', JSON.stringify(todosValue))
        },
        {deep: true}
    )

    const finishedTodos = () => {
        return todos.value.filter((todo) => todo.isFinished)
    }

    const unFinishedTodos = () => {
        return todos.value.filter((todo) => !todo.isFinished)
    }

    const filterTodos = () => {
        if (filter.value === 'finished') {
            return finishedTodos()
        }else if(filter.value === 'unfinished'){
            return unFinishedTodos()
        }

        return todos.value
    }

    const addTodos = (text) => {
        todos.value.push({id: ++nextId.value, text, isFinished: false})
    }

    const removeTodo = (item) => {
        todos.value = todos.value.filter((todo) => todo != item)
        //todos.value.splice(id, 1)
    }

    const clearCompleted = () => {
        todos.value = todos.value.filter((todo) => !todo.isFinished)
    }

    return {
        addTodos,
        filterTodos,
        unFinishedTodos,
        removeTodo,
        clearCompleted,
        filter,
        todos
    }
})