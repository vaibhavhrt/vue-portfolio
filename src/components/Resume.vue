<template>
  <div class="root">
    <a
      v-bind:href="`${publicPath}resume.pdf`"
      target='_blank'
      rel='noopener noreferrer'
      download='Vaibhav Vishal Resume.pdf'
    >
      Download Résumé as pdf
    </a>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
    }
  }
}
</script>

<style scoped>
  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 32px;
  }
</style>
