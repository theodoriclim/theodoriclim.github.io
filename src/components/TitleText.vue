<template>
  <v-row no-gutters>
    <v-col :order="order1"></v-col>
    <v-col :order="order2"></v-col>
    <v-col :order="order3">
      <v-container id="title-text-container">
        <v-row justify="center">
          <h4 id="title-text-main">{{ main }}</h4>
        </v-row>
        <v-row justify="center">
          <span id="title-text-secondary">{{ secondary }}</span>
        </v-row>
        <v-row justify="center">
          <hr id="title-text-border" :style="hrCSS" />
        </v-row>
      </v-container>
    </v-col>
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

  get order1(): number {
    if (this.justify === "start") {
      return 2;
    } else if (this.justify === "center") {
      return 3;
    } else if (this.justify === "end") {
      return 1;
    } else {
      return 0;
    }
  }

  get order2(): number {
    if (this.justify === "start") {
      return 3;
    } else if (this.justify === "center") {
      return 1;
    } else if (this.justify === "end") {
      return 2;
    } else {
      return 0;
    }
  }

  get order3(): number {
    if (this.justify === "start") {
      return 1;
    } else if (this.justify === "center") {
      return 2;
    } else if (this.justify === "end") {
      return 3;
    } else {
      return 0;
    }
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

#title-text-container {
  position: relative;
}

#title-text-main {
}

#title-text-secondary {
  position: absolute;
  font-size: 3.75rem;
  font-weight: 600;
  opacity: 0.05;
  bottom: -1.5rem;
}

#title-text-border {
  position: absolute;
  border-style: solid;
  border-width: 0.05rem;
  bottom: 0.35rem;
}

.row.no-gutters {
  margin: 0 4rem;
}
</style>
