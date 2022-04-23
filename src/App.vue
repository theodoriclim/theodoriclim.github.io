<template>
  <v-app>
    <v-main v-if="isMobile">
      <v-container id="mobile-container" fluid fill-height>
        <v-row align="center" justify="center">
          <v-col align="center">
            <h1>404</h1>
          </v-col>
          <v-col>
            <h6>
              Hey! I am still working on the mobile site. Do visit on a desktop
              instead!
            </h6>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-main v-else>
      <landing-page :isMobile="isMobile"></landing-page>
      <about-me :isMobile="isMobile"></about-me>
      <works :isMobile="isMobile"></works>
      <skills :isMobile="isMobile"></skills>
      <contact :isMobile="isMobile"></contact>
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
import { Component } from "vue-property-decorator";

@Component({
  components: {
    LandingPage,
    AboutMe,
    Works,
    Skills,
    Contact,
  },
})
export default class App extends Vue {
  get isMobile(): boolean {
    return this.$vuetify.breakpoint.width <= 1300;
  }
}
</script>

<style scoped>
#mobile-container {
  background-color: var(--app-white);
  border-right: 8px solid var(--app-green);
  border-left: 8px solid var(--app-blue);
  border-top: 8px solid var(--app-green);
  border-bottom: 8px solid var(--app-blue);
}
</style>
