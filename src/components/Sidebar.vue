<template>
  <div class="root">
    <h1 class="header">Vaibhav</h1>
    <nav class="navContainer">
      <ul>
        <li v-for="link in links" v-bind:key="link.to">
          <router-link v-bind:to="link.to" exact active-class="navLinkActive">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="social">
      <a
        v-for="({link, title, icon}) in socialLinks"
        v-bind:key="link"
        v-bind:href="link"
        target="_blank"
        v-bind:title="title"
        rel="noopener noreferrer"
      >
        <img v-bind:src="icon" v-bind:alt="title" />
      </a>
    </div>
  </div>
</template>

<script>
import GithubIcon from '../assets/icons/github.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import StackOverflowIcon from '../assets/icons/stackoverflow.svg'
import TwitterIcon from '../assets/icons/twitter.svg'

export default {
  name: "Sidebar",
  data: function () {
    return {
      links: [
        { name: 'Hello', to: '/' },
        { name: 'Projects', to: '/projects/' },
        { name: 'Résumé', to: '/resume/' },
        { name: 'Contact', to: '/contact/' },
      ],
      socialLinks: [
        { link: 'https://github.com/vaibhavhrt', title: 'Github', icon: GithubIcon },
        { link: 'https://www.linkedin.com/in/vaibhavhrt/', title: 'LinkedIn', icon: LinkedInIcon },
        { link: 'https://stackoverflow.com/story/vaibhavvishal', title: 'Stack Overflow', icon: StackOverflowIcon },
        { link: 'https://twitter.com/Vaibhav_hrt', title: 'Twitter', icon: TwitterIcon },
      ],
    }
  }
}
</script>

<style scoped>
  .root {
    width: 20%;
  }
  .header {
    font-family: 'Playfair Display', serif;
    font-size: 3em;
    font-weight: 400;
    margin-block-start: 0.34em;
    margin-block-end: 0.34em;
  }
  .navContainer {
    display: flex;
    flex-flow: column;
  }
  .navContainer li {
    list-style: none;
  }
  .navContainer a {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #b0b0b0;
  }
  .navContainer a:hover, .navContainer a:focus {
    color: #6793a8;
  }
  .navLinkActive {
    color: #020202 !important;
  }
  .social {
    display: flex;
  }
  .social img {
    height: 16px;
    width: 16px;
    margin: 8px;
  }
</style>

