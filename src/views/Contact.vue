<template>
  <v-layout class="fullscreen">
      <contact-icons v-if="!isMobile"></contact-icons>
      <v-img v-if="!isMobile" :src="layeredWaves" data-aos="fade-up"></v-img>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ContactIcons from "@/components/ContactIcons.vue";

@Component({
  components: {
    ContactIcons,
  },
})
export default class Contact extends Vue {
  @Prop({ required: true, type: Boolean })
  private readonly isMobile: boolean;

  get layeredWaves(): any {
    return require("@/assets/images/contact/layered_waves.svg");
  }
}
</script>

<style scoped>
#contact-icons-container {
  bottom: 1%;
  left: 40%;
  position: absolute;
  z-index: 1;
}

.fullscreen {
  height: auto;
  background-color: var(--app-white);
}
</style>
