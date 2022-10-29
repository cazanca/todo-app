<script setup>
import Container from './Container.vue';
import Card from './Card.vue';
import Todo from './Todo.vue';
import Filter from './Filter.vue';
import MobileFilter from './MobileFilter.vue';
import { useTodo } from '../store/todo'

const todoStore = useTodo()

</script>

<template>
    <div class="content">
        <Container>
            <Card v-if="todoStore.todos.length">
                <Todo v-for="(todo, index) in todoStore.filterTodos()" :todo="todo" :key="index"/>
                <Filter/>
            </Card>
            <MobileFilter  v-if="todoStore.todos.length" />
        </Container>
    </div>
</template>