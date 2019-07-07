<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
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
