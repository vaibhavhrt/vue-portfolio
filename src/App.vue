<template>
  <div id="app">
    <Sidebar></Sidebar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #f5f5f5;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 32px;
  display: flex;
}
main {
  width: 80%;
}
</style>
