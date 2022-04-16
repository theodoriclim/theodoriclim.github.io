<template>
  <v-overlay
    :opacity="opacity"
    :value="overlay"
    @keyup.esc="closeGallery()"
    @keyup.right="goNext()"
    @keyup.left="goBack()"
    tabindex="0"
  >
    <v-row class="mt-6 ml-6 mr-6" justify="end" no-gutters>
      <v-btn class="mx-2 control-button" @click="closeGallery()" fab small>
        <icon class="control-icon" icon="carbon:close"></icon>
      </v-btn>
    </v-row>
    <v-row id="image-row" class="pb-12" align="center" no-gutters>
      <v-col cols="2" align="center">
        <v-btn class="mx-2 control-button" @click="goBack()" fab small>
          <icon class="control-icon" icon="akar-icons:chevron-left"></icon>
        </v-btn>
      </v-col>
      <v-col cols="8">
        <span v-if="images.length === 0">There are no images!</span>
        <v-container id="image-container" v-if="images.length > 0">
          <v-img :src="image.src" :max-height="imageMaxHeight"></v-img>
          <div class="pl-4 pr-4 pt-2 pd-2" id="image-caption">
            {{ image.caption }}
          </div>
        </v-container>
      </v-col>
      <v-col cols="2" align="center">
        <v-btn class="mx-2 control-button" @click="goNext()" fab small>
          <icon class="control-icon" icon="akar-icons:chevron-right"></icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-overlay>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import { ExtraWorkImage } from "@/models/Work";

@Component({
  components: {
    Icon,
  },
})
export default class ImageGallery extends Vue {
  @Prop({ required: true, type: Boolean })
  private readonly overlay: boolean;

  @Prop({
    required: true,
    type: Array as PropType<string[]>,
    default: () => [],
  })
  private readonly images: ExtraWorkImage[];

  private readonly opacity = 0.95;
  private readonly imageMaxHeight = "60vh";

  private firstImageIndex: number;
  private lastImageIndex: number;
  private currentImageIndex = 0;

  mounted() {
    this.firstImageIndex = 0;
    this.lastImageIndex = this.images.length - 1;
  }

  private closeGallery() {
    this.$emit("closeGallery");
  }

  private goNext() {
    this.currentImageIndex = this.currentImageIndex + 1;
  }

  private goBack() {
    this.currentImageIndex = this.currentImageIndex - 1;
  }

  // Computed
  get image(): any {
    return this.images[this.currentImageIndex];
  }

  // Watcher
  @Watch("currentImageIndex")
  currentImageIndexChanged() {
    if (this.currentImageIndex < this.firstImageIndex) {
      this.currentImageIndex = this.lastImageIndex;
    } else if (this.currentImageIndex > this.lastImageIndex) {
      this.currentImageIndex = this.firstImageIndex;
    }
  }
}
</script>

<style scoped>
#image-row {
  height: 85vh;
}

#image-caption {
  font-size: var(--font-size-nine);
  font-weight: 300;
  color: var(--app-white);
  background-color: var(--app-grey);
  opacity: 0.95;
  padding: 5px;
  justify-content: space-evenly;
}

.v-overlay {
  display: inline-block;
}

.control-button {
  background-color: var(--app-white);
}

.control-icon {
  color: var(--app-yellow);
}
</style>
