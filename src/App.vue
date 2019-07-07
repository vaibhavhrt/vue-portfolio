<template>
  <div id="app">
    <main>
      <img alt="Vue logo" src="./assets/logo.png">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 32;
  display: flex;
}
main {
  width: 80%;
}
</style>
