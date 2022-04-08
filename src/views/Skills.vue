<template>
  <v-layout class="fullscreen">
    <v-container>
      <title-text
        class="mb-12"
        justify="end"
        main="Skills."
        secondary="Technology"
        divider-color="var(--app-pink)"
        divider-width="3.25rem"
      />
      <v-container>
        <v-row>
          <h4>Languages</h4>
        </v-row>
        <v-row align="center">
          <v-col v-for="(language, index) in languages" :key="index" cols="1">
            <v-img :src="language"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <h4>Frameworks & Tools</h4>
        </v-row>
        <v-row align="center">
          <v-col
            v-for="(frameworkOrTool, index) in frameworksAndTools"
            :key="index"
            cols="1"
          >
            <v-img :src="frameworkOrTool"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleText from "@/components/TitleText.vue";

@Component({
  components: {
    TitleText,
  },
})
export default class Skills extends Vue {
  private readonly languages: any[] = [
    this.getIconURL("java_icon.png"),
    this.getIconURL("javascript_icon.png"),
    this.getIconURL("python_icon.png"),
  ];

  private readonly frameworksAndTools: any[] = [
    this.getIconURL("angular_icon.png"),
    this.getIconURL("vue_icon.png"),
    this.getIconURL("react_icon.png"),
    this.getIconURL("spring_icon.png"),
    this.getIconURL("django_icon.png"),
    this.getIconURL("postgres_icon.png"),
    this.getIconURL("mysql_icon.png"),
    this.getIconURL("git_icon.png"),
  ];

  getIconURL(iconName: string): any {
    // Somehow you can't separate the require,
    // Need to figure out, i really don't know why
    return require("@/assets/images/skills/".concat(iconName));
  }
}
</script>

<style scoped>
.fullscreen {
  background-color: var(--app-white);
}

.fullscreen > .container {
  padding-top: 20vh;
}

.v-image {
  filter: drop-shadow(2px 2px 0px rgba(239, 71, 111, 0.7));
}
</style>
