<script setup>
import NavigationBar from "./components/Navigation/NavigationBar.vue"
</script>

<template>
  <v-app>
    <v-main>
      <NavigationBar/>
      <RouterView  :key="$route.fullPath" />
    </v-main>
  </v-app>
  
</template>

<style scoped>
</style>
