<template>
  <div class="fullscreen">
    <v-container>
      <v-row>
        <v-col :cols="8">
          <v-col id="greeting-text-container">
            <h2>Hi! I'm</h2>
            <br />
            <h2>Theodoric.</h2>
          </v-col>
          <v-col id="caption-text-container">
            <h7>Full-Stack Web Developer from Singapore.</h7>
          </v-col>
          <v-col id="download-btn-container">
            <v-btn class="rounded-pill">
              <h9>Download CV</h9>
            </v-btn>
          </v-col>
          <v-row id="contact-icons-container" class="ml-0">
            <icon class="ml-6 mr-6" icon="bxs:phone" color="white"></icon>
            <icon
              class="ml-6 mr-6"
              icon="clarity:email-solid"
              color="white"
            ></icon>
            <icon
              class="ml-6 mr-6"
              icon="akar-icons:github-fill"
              color="white"
            ></icon>
          </v-row>
        </v-col>
        <v-col :cols="4">
          <v-card
            id="large-code-icon-container"
            class="rounded-xl"
            elevation="12"
          >
            <icon id="large-code-icon" icon="ant-design:code-filled"></icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Icon } from "@iconify/vue2";

export default Vue.extend({
  name: "LandingPage",

  components: {
    Icon,
  },
});
</script>

<style scoped>
@media (min-width: 1264px) {
  .fullscreen {
    background-color: var(--app-green);
  }

  .container {
    padding-top: 30vh;
    margin-left: 2.3rem;
    margin-right: 2.3rem;
  }

  #greeting-text-container {
    line-height: 125%;
  }

  #greeting-text-container h2 {
    color: white;
    font-weight: 700;
  }

  #caption-text-container {
    padding-top: 0;
  }

  #caption-text-container h7 {
    color: white;
    font-weight: 500;
  }

  #download-btn-container {
    margin-top: 1rem;
  }

  #download-btn-container .v-btn {
    background-color: var(--app-pink);
    color: white;
    padding: 0.8rem 0.8rem;
  }

  #download-btn-container .v-btn h8 {
    font-weight: 500;
  }

  #contact-icons-container {
    margin-top: 1.8rem;
  }

  #large-code-icon-container,
  .v-card {
    min-width: 16em;
    height: 16em;
  }

  #large-code-icon {
    background-color: var(--app-blue);
    color: var(--app-white);
    font-size: 16rem;
  }
}
</style>
