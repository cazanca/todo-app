<script setup>
import { ref } from 'vue';
import Content from './components/Content.vue';
import Header from './components/Header.vue';

const dark = ref(true);


</script>

<template>
  <Header/>
  <Content/>
</template>

