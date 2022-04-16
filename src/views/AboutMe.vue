<template>
  <v-layout class="fullscreen">
    <v-container>
      <title-text
        class="mb-12"
        justify="center"
        main="About Me."
        secondary="Profile"
        divider-color="var(--app-blue)"
        divider-width="5.75rem"
        data-aos="fade-up"
      />
      <v-container data-aos="fade-up">
        <v-row>
          <v-col col="1" class="profile-text">
            {{ leftText }}
          </v-col>
          <v-col col="1" class="profile-text">
            {{ rightText }}
          </v-col>
        </v-row>
      </v-container>
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
export default class AboutMe extends Vue {
  private leftText: string =
    "Hi! I am Theodoric, friends call me Theo. I started off in information\n" +
    "security but found my passion in web development. Apart from learning\n" +
    "about software frameworks and the likes, I enjoy keeping myself fit.\n" +
    "So far, I have gotten into weightlifting, roller blading, ice skating\n" +
    "and as of late, rock climbing.";
  private rightText: string =
    "Being in NUS, it has also provided me with the opportunity to share my\n" +
    "love for programming by teaching classes to juniors in my course. I\n" +
    "look forward to be able to contribute to a company, and improve myself\n" +
    "as a developer. Continue scrolling to see some of my skillsets and\n" +
    "works!";
}
</script>

<style scoped>
.fullscreen {
  background-color: var(--app-white);
}

.fullscreen > .container {
  padding-top: 30vh;
}

.profile-text {
  font-size: var(--font-size-nine);
  line-height: 1.25rem;
  text-align: justify;
}
</style>
