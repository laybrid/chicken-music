<template>
  <Header></Header>
  <Tab></Tab>
  <router-view />
</template>

<script setup lang="ts">
import Header from  './components/Header/header.vue'
import Tab from './components/Tab/tab.vue'
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #222;
}
</style>
