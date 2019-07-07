<template>
  <div class="root">
      <div class="grow"></div>
      <div class="content">
        <h2>Hello, I am Vaibhav Vishal</h2>
        <p>Software Developer, loves Python and JS</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  min-height: calc(100vh - 64px);
  background-image: url(../assets/background.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.grow {
  flex-grow: 1;
}
.content {
  margin-bottom: 128px;
  padding: 16px;
  background-color: rgba(149, 228, 129, 0.85);
  border-radius: 2px;
  text-align: center;
}
.content p {
  font-size: 24px;
  font-family: 'roboto', sans-serif;
}
.content h2 {
  font-size: 2em;
  font-family: 'Playfair Display', serif;
}
</style>
