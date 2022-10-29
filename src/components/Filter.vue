<script setup>
import useFilter from '../composable/useFilter';

const {active, changeFilter, unfinished, clearCompleted} = useFilter()

</script>
<template>
    <div class="filter">
        <div class="left">
        <p>{{unfinished()}} items left</p>
        </div>
        <div class="center">
        <button :class="active('all')" @click="changeFilter('all')">All</button>
        <button :class="active('unfinished')"  @click="changeFilter('unfinished')">Active</button>
        <button :class="active('finished')"  @click="changeFilter('finished')">Completed</button>
        </div>
        <div class="right">
        <button @click="clearCompleted()">
            Clear Completed
        </button>
        </div>
    </div>
</template>