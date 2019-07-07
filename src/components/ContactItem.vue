<template>
  <div class="root">
      <img v-bind:src="icon" v-bind:alt="title" class="icon" />
      <h4>{{ title }}</h4>
      <a v-bind:href="link" target='_blank' rel='noopener noreferrer'>
        {{ linkDisplay }}</a>
    </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    icon: String,
    title: String,
    link: String,
    linkDisplay: String,
  },
}
</script>

<style scoped>
  .root {
    margin: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
  .root h4 {
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
  }
  .root a {
    text-align: center;
    text-decoration: none;
    font-family: 'roboto', sans-serif;
    color: #68afbf;
  }
  .icon {
    height: 64px;
    width: 64px;
  }
</style>
