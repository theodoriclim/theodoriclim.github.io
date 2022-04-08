<template>
  <v-col md="6">
    <v-hover v-slot="{ hover }">
      <v-card elevation="5">
        <v-img :src="work.src">
          <v-expand-transition>
            <v-container id="hover-container" v-if="hover">
              <v-row>
                <v-col cols="10">
                  <h6>{{ work.header }}</h6>
                </v-col>
                <v-col>
                  <a @click="openGallery()" v-if="work.extraImages">
                    <icon id="image-icon" icon="entypo:images"></icon>
                  </a>
                </v-col>
              </v-row>
              <span>{{ work.details }}</span>
            </v-container>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
    <image-gallery
      :overlay="overlay"
      :images="work.extraImages"
      @closeGallery="closeGallery()"
      @keydown.esc="closeGallery()"
      ref="imageGallery"
    ></image-gallery>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import { Work } from "@/models/Work";
import ImageGallery from "@/components/ImageGallery.vue";

@Component({
  components: {
    Icon,
    ImageGallery,
  },
})
export default class TitleText extends Vue {
  @Prop({ required: true, type: Work })
  readonly work: Work;

  @Ref("imageGallery")
  private readonly imageGallery: any;

  private overlay = false;

  private openGallery() {
    this.overlay = true;
    // Immediately focus on image gallery when it is open
    this.imageGallery.$el.focus();
    document.documentElement.style.overflow = "hidden";
  }

  private closeGallery() {
    this.overlay = false;
    document.documentElement.style.overflow = "auto";
  }
}
</script>

<style scoped>
#hover-container {
  background-color: var(--app-yellow);
  height: 100%;
  padding: 0.25rem;
}

#hover-container > .row > .col > h6 {
  color: var(--app-grey);
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);
}

#hover-container > .row > .col > a {
  color: var(--app-grey);
}

#hover-container > span {
  display: inline-block;
  color: var(--app-grey);
  font-size: var(--font-size-nine);
  line-height: 0.75rem;
}

.v-card {
  background-color: var(--app-yellow);
  border-radius: 0.25rem;
  aspect-ratio: 16 / 9;
}

.v-image {
  border: 0.2rem solid var(--app-yellow);
  height: 100%;
  width: 100%;
}
</style>
