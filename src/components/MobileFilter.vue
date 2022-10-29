<script setup>
import useFilter from '../composable/useFilter';

const {active, changeFilter, todoStore} = useFilter()
</script>
<template>
    <div class="mobile-filter" v-if="todoStore.todos.length">
      <button :class="active('all')" @click="changeFilter('all')">All</button>
        <button :class="active('unfinished')"  @click="changeFilter('unfinished')">Active</button>
        <button :class="active('finished')"  @click="changeFilter('finished')">Completed</button>
      </div>
</template>