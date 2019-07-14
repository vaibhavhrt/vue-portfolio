<template>
  <div class="root">
    <a
      v-bind:href="ResumePdf"
      target='_blank'
      rel='noopener noreferrer'
      download='Vaibhav Vishal Resume.pdf'
    >
      Download Résumé as pdf
    </a>
  </div>
</template>

<script>
import ResumePdf from '../assets/resume.pdf';
export default {
  name: "Resume",
  data: function () {
    return {
      ResumePdf,
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
