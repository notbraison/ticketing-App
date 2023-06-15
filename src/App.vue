<template>
  <RouterView>
    
  </RouterView>
</template>

<script setup>//this is the only component that uses the composition api in this ticketing project
import Home  from './components/home/home.vue'// the name Home must match the tag we have created up there inside a div in template
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
