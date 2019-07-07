<template>
  <div class="projects-root">
    <ProjectCard
      v-for="project in projects"
      v-bind:key="project.repo"
      v-bind:repo="project.repo"
      v-bind:description="project.description"
      v-bind:owner="project.owner"
      v-bind:projectLink="project.projectLink"
      v-bind:projectLinkTitle="project.projectLinkTitle"
    ></ProjectCard>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard,
  },
  data: function () {
    return {
      projects: [
        {
          repo: 'web-extension',
          description: 'Extension for Visual Studio Code to provide autocompletion for web browser extension api',
          owner: 'vaibhavhrt',
          projectLink: 'https://marketplace.visualstudio.com/items?itemName=VaibhavVishal.web-extension',
          projectLinkTitle: 'VS Code Marketplace',
        },
        {
          repo: 'react-github-buttons',
          description: 'React Components for dynamic buttons for github repo\'s star, fork etc.',
          owner: 'vaibhavhrt',
          projectLink: 'https://www.npmjs.com/package/react-github-buttons',
          projectLinkTitle: 'npm',
        },
        {
          repo: 'github-easy-repo-delete',
          description: 'Chrome extension that provides option to easily delete github repos',
          owner: 'vaibhavhrt',
          projectLink: 'https://chrome.google.com/webstore/detail/easy-github-repo-delete/adoiopbekmljhndnefhmagpfgioedfae',
          projectLinkTitle: 'Chrome Webstore',
        },
      ]
    }
  }
}
</script>

<style scoped>
  .projects-root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 32px;
  }
</style>
