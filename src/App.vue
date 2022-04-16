<template>
  <v-app>
    <v-main>
      <landing-page></landing-page>
      <about-me></about-me>
      <works></works>
      <skills></skills>
      <contact></contact>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import LandingPage from "@/views/LandingPage.vue";
import AboutMe from "@/views/AboutMe.vue";
import Works from "@/views/Works.vue";
import Skills from "@/views/Skills.vue";
import Contact from "@/views/Contact.vue";

export default Vue.extend({
  name: "App",

  components: {
    LandingPage,
    AboutMe,
    Works,
    Skills,
    Contact,
  },

  mounted() {
  },

  data: () => ({
    //
  }),
});
</script>