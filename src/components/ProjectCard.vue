<template>
  <div class="root">
    <!-- Title -->
    <h3 class="title">{{ repo }}</h3>
    <!-- Description -->
    <p class="description">{{ description }}</p>
    <!-- Project Link -->
    <a
      v-if="projectLinkTitle && projectLink"
      v-bind:href="projectLink"
      target='_blank'
      rel='noopener noreferrer'
      class="projectLink"
    >
      Get it on {{ projectLinkTitle }}
    </a>
    <!-- Github Buttons -->
    <div class="github">
      <!-- Github link & Logo -->
      <a
        v-bind:href="githubLink"
        target='_blank'
        rel='noopener noreferrer'
        title='View on Github'
      >
        <img class="githubIcon" v-bind:src="GithubIcon" alt='github icon' />
      </a>
      <!-- <Star owner={owner} repo={repo} /> -->
      <!-- <Fork owner={owner} repo={repo} /> -->
    </div>
  </div>
</template>

<script>
import GithubIcon from '../assets/icons/github.svg'

export default {
  name: 'ProjectCard',
  data: function () {
    return {
      githubLink: `https://github.com/${this.owner}/${this.repo}`,
      GithubIcon,
    }
  },
  props: {
    owner: String,
    repo: String,
    description: String,
    projectLink: String,
    projectLinkTitle: String,
  },
}
</script>

<style scoped>
  .root {
    width: 340px;
    height: 340px;
    padding: 16px;
    margin: 8px;
    text-align: center;
    border-radius: 2px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s, margin 0.5s;
    will-change: transform;
  }
  .root:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    margin: 16px;
  }
  .title {
    font-family: 'Playfair Display', serif;
    font-size: 2em;
    font-weight: 400;
  }
  .description {
    font-family: 'roboto', sans-serif;
    font-size: 16px;
  }
  .projectLink {
    display: block;
    font-family: 'roboto', sans-serif;
    text-decoration: none;
    font-size: 16px;
    color: #68afbf;
  }
  .github {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
  }
  .githubIcon {
    vertical-align: middle;
    height: 24px;
    width: 23px;
  }
</style>
