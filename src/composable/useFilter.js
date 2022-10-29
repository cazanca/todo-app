import { useTodo } from '../store/todo'

export default function useFilter () {
    const todoStore = useTodo()

    const active = (value) => {
        return  todoStore.filter === value ? 'active': ''
    }
    
    const changeFilter = (value) => {
        todoStore.filter = value
    }
    
    const unfinished = () => {
        return todoStore.unFinishedTodos().length
    }

    const clearCompleted = todoStore.clearCompleted
    return {
        todoStore,
        active, 
        changeFilter,
        unfinished,
        clearCompleted
    }
}