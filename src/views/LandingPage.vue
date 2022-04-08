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
            <v-btn class="rounded-pill pa-8">
              <span class="font-weight-medium">Download CV</span>
            </v-btn>
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
import ContactIcons from "@/components/ContactIcons.vue"

import { Icon } from "@iconify/vue2";

@Component({
  components: {
    Icon,
    ContactIcons
  },
})
export default class LandingPage extends Vue {}
</script>

<style scoped>
.fullscreen {
  background-color: var(--app-green);
}

.fullscreen > .container {
  padding-top: 27.5vh;
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
