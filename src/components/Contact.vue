<template>
  <div class="contact-root">
    <h1 class="title">Contact Me</h1>
    <div class="contactsContainer">
      <ContactItem
        v-for="contact in contacts"
        v-bind:key="contact.title"
        v-bind:icon="contact.icon"
        v-bind:title="contact.title"
        v-bind:link="contact.link"
        v-bind:linkDisplay="contact.linkDisplay"
      />
    </div>
  </div>
</template>

<script>
import ContactItem from './ContactItem.vue';

import LinkedIcon from '../assets/icons/linkedin.svg';
import MailIcon from '../assets/icons/gmail.svg';
import TwitterIcon from '../assets/icons/twitter.svg';

export default {
  name: "Contact",
  components: { ContactItem },
  data: function () {
    return {
      contacts: [
        {
          icon: LinkedIcon,
          title: "LinkedIn Profile",
          link: "https://www.linkedin.com/in/vaibhavhrt/",
          linkDisplay: "/in/vaibhavhrt"
        },
        {
          icon: MailIcon,
          title: "Email",
          link: "mailto:vaibhav.hrt@gmail.com",
          linkDisplay: "vaibhav.hrt@gmail.com",
        },
        {
          icon: TwitterIcon,
          title: "Twitter",
          link: "https://twitter.com/Vaibhav_hrt",
          linkDisplay: "@Vaibhav_hrt",
        },
      ],
    }
  },
}
</script>

<style scoped>
  .contact-root {
    padding: 32px;
  }
  .title {
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 3em;
  }
  .contactsContainer {
    display: flex;
  }
</style>
