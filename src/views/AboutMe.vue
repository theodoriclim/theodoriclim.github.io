<template>
  <v-layout justify-center class="fullscreen">
    <v-container>
      <title-text
        class="mb-12"
        justify="center"
        main="About Me."
        secondary="Profile"
        divider-color="var(--app-blue)"
        divider-width="5.75rem"
      />
      <v-row>
        <v-col col="1" class="profile-text">
          Hi! I am Theodoric, friends call me Theo. I started off in information
          security but found my passion in web development. Apart from learning
          about software frameworks and the likes, I enjoy keeping myself fit.
          So far, I have gotten into weightlifting, roller blading, ice skating
          and as of late, rock climbing.
        </v-col>
        <v-col col="1" class="profile-text">
          Being in NUS, it has also provided me with the opportunity to share my
          love for programming by teaching classes to juniors in my course. I
          look forward to be able to contribute to a company, and improve myself
          as a developer. Continue scrolling to see some of my skillsets and
          works!
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TitleText from "../components/TitleText.vue";

@Component({
  components: {
    TitleText,
  },
})
export default class AboutMe extends Vue {}
</script>

<style scoped>
.fullscreen {
  background-color: var(--app-white);
}

@media (min-width: 1264px) {
  .fullscreen > .container {
    padding-top: 30vh;
    margin: 0 5rem;
  }

  .profile-text {
    font-size: var(--font-size-nine);
    line-height: 1.25rem;
    text-align: justify;
  }
}
</style>
