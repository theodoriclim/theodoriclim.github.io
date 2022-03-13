<template>
  <v-row :justify="justify">
    <div>
      <h4 id="title-text-main">{{ main }}</h4>
      <span id="title-text-secondary">{{ secondary }}</span>
      <hr :style="hrCSS" />
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TitleText extends Vue {
  @Prop({ required: true, type: String, default: "center" })
  readonly justify!: string;

  @Prop({ required: true, type: String, default: "Main." })
  readonly main!: string;
  @Prop({ required: true, type: String, default: "Secondary" })
  readonly secondary!: string;

  @Prop({ required: true, type: String, default: "black" })
  readonly dividerColor!: string;
  @Prop({ required: true, type: String, default: "100" })
  readonly dividerWidth!: string;

  get hrCSS(): string {
    return (
      "background-color: " +
      this.dividerColor +
      ";" +
      "border-color: " +
      this.dividerColor +
      ";" +
      "width: " +
      this.dividerWidth +
      ";"
    );
  }
}
</script>

<style scoped>
* {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
}

div {
  text-align: center;
  height: 1.5rem;
}

hr {
  position: relative;
  bottom: 6.05rem;
  margin: auto;
  border-style: solid;
  border-width: 0.05rem;
}

#title-text-main {
  position: relative;
  margin: 0 auto;
}

#title-text-secondary {
  position: relative;
  bottom: 4.25rem;
  font-size: 3.75rem;
  font-weight: 600;
  opacity: 5%;
}
</style>
