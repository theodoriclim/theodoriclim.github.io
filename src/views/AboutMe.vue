<template>
  <v-layout class="fullscreen">
    <v-container :style="containerStyle">
      <title-text
        class="mb-12"
        justify="center"
        main="About Me."
        secondary="Profile"
        divider-color="var(--app-blue)"
        divider-width="5.75rem"
        data-aos="fade-up"
        :isMobile="isMobile"
      />
      <v-container v-if="isMobile" data-aos="fade-up">
        <v-row>
          <v-col col="1" class="mobile-profile-text">
            {{ leftText }}
          </v-col>
          <v-col col="1" class="mobile-profile-text">
            {{ rightText }}
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else data-aos="fade-up">
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
import { Component, Prop, Vue } from "vue-property-decorator";
import TitleText from "../components/TitleText.vue";

@Component({
  components: {
    TitleText,
  },
})
export default class AboutMe extends Vue {
  @Prop({ required: true, type: Boolean })
  private readonly isMobile: boolean;

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

  get containerStyle(): any {
    if (this.isMobile) {
      return { "padding-top": "12vh", margin: "0" };
    } else {
      return { "padding-top": "30vh", margin: "0 2.3rem" };
    }
  }
}
</script>

<style scoped>
.fullscreen {
  background-color: var(--app-white);
}

.mobile-profile-text {
  font-size: 0.35rem;
  line-height: 0.75rem;
  text-align: justify;
}

.profile-text {
  font-size: var(--font-size-nine);
  line-height: 1.25rem;
  text-align: justify;
}
</style>
