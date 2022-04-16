<template>
  <v-layout justify-center class="fullscreen">
    <v-container>
      <v-row>
        <v-col>
          <v-col id="greeting-text-container">
            <h2 class="font-weight-bold">Hi! I'm</h2>
            <br />
            <h2 class="font-weight-bold">Theodoric.</h2>
          </v-col>
          <v-col id="caption-text-container" class="mb-10 pt-0">
            <span class="font-weight-medium"
              >Full-Stack Web Developer from Singapore.</span
            >
          </v-col>
          <v-col id="download-btn-container" class="mb-16">
            <v-menu nudge-bottom="8px" close-delay="250" open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="rounded-pill pa-8" dark v-bind="attrs" v-on="on">
                  <span class="font-weight-medium">Download CV</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(option, index) in downloadCVOptions"
                  :class="getBackgroundColor(index)"
                  :key="index"
                  :href="option.resumeLink"
                  :download="option.resumeName"
                >
                  <v-list-item-icon>
                    <icon icon="clarity:document-solid"></icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="option.name"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <contact-icons></contact-icons>
        </v-col>
        <v-col id="large-code-icon-container" align="right">
          <v-card class="rounded-xl" elevation="12">
            <icon id="large-code-icon" icon="ant-design:code-filled"></icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactIcons from "@/components/ContactIcons.vue";

import { Icon } from "@iconify/vue2";

@Component({
  components: {
    Icon,
    ContactIcons,
  },
})
export default class LandingPage extends Vue {
  private readonly downloadCVOptions = [
    {
      name: "Black & White",
      resumeName: "Resume_Theodoric_Keith_Lim_B&W.pdf",
      resumeLink: this.getResume("Resume_Theodoric_Keith_Lim_B&W.pdf"),
    },
    {
      name: "Colored",
      resumeName: "Resume_Theodoric_Keith_Lim_Colored.pdf",
      resumeLink: this.getResume("Resume_Theodoric_Keith_Lim_Colored.pdf"),
    },
  ];

  getBackgroundColor(index: number): string {
    if (index === 0) {
      return "white-background";
    } else if (index === 1) {
      return "white-background";
    } else {
      return "";
    }
  }

  getResume(resumeName: string): any {
    return require("@/assets/resumes/".concat(resumeName));
  }
}
</script>

<style scoped>
.black-background {
  background-color: black !important;
}

.white-background {
  background-color: var(--app-white) !important;
}

.blue-background {
  background-color: var(--app-blue) !important;
}

.fullscreen {
  background-color: var(--app-green);
}

.fullscreen > .container {
  padding-top: 27.5vh;
}

.v-list {
  padding: 0;
}

.v-list-item {
  max-height: 0;
}

.v-list-item__title {
  color: var(--app-grey);
  font-size: var(--font-size-nine);
}

.v-list-item__icon {
  color: var(--app-grey);
  align-self: center;
}

#greeting-text-container {
  line-height: 125%;
}

#greeting-text-container > h2 {
  color: white;
}

#caption-text-container > span {
  color: white;
  font-size: var(--font-size-seven);
}

#download-btn-container > .v-btn {
  background-color: var(--app-pink);
  color: white;
  font-size: var(--font-size-nine);
}

#large-code-icon-container > .v-card {
  max-width: 16em;
  max-height: 16em;
}

#large-code-icon {
  background-color: var(--app-blue);
  color: var(--app-white);
  font-size: 16rem;
}
</style>
