<template>
  <v-layout class="fullscreen">
    <v-container :style="containerStyle">
      <title-text
        class="mb-12"
        justify="start"
        main="Works."
        secondary="Projects"
        divider-color="var(--app-yellow)"
        divider-width="3.5rem"
        data-aos="fade-up"
        :isMobile="isMobile"
      />
      <v-container id="work-container">
        <v-row>
          <work-card :work="works[0]"></work-card>
          <work-card :work="works[1]"></work-card>
        </v-row>
        <v-row>
          <work-card :work="works[2]"></work-card>
          <work-card :work="works[3]"></work-card>
        </v-row>
      </v-container>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Work, ExtraWorkImage } from "@/models/Work";
import WorkCard from "@/components/WorkCard.vue";
import TitleText from "@/components/TitleText.vue";

@Component({
  components: {
    TitleText,
    WorkCard,
  },
})
export default class Works extends Vue {
  @Prop({ required: true, type: Boolean })
  private readonly isMobile: boolean;

  private works: Array<Work> = [
    new Work({
      src: this.getImageURL("pcs_home.png"),
      header: "Pet Caring System",
      details:
        "This mini web project was started as a test bed to play with PostgreSQL and its functionality. " +
        "Using Express.js, we built a web interface that showcased the use of CRUD operations to read and manipulate data.",
      extraImages: [
        new ExtraWorkImage({
          src: this.getImageURL("pcs_home.png"),
          caption: "Home page of the PCS!",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("pcs_search.png"),
          caption:
            "A page that allows the users to search through our database for a caretaker. " +
            "The search can be filtered by the caretaker's availability and category. " +
            "This search may not be the most efficient as the algorithm was created in-house with PostgreSQL! " +
            "It is not much but it is honest work.",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("pcs_summary.png"),
          caption: "A page on the summary of a user's profile.",
        }),
      ],
    }),
    new Work({
      src: this.getImageURL("iceium_home.png"),
      header: "Iceium",
      details:
        "Being the team leader of this project, I influenced my team to make it about selling ice skates. " +
        "The featured picture is the landing page of the customer facing side, created with Angular (not AngularJS), and beautifully designed by my team mate! " +
        "Additionally, there is a administrative portal that is made using the JSF framework.",
    }),
    new Work({
      src: this.getImageURL("kodo_customer_home.png"),
      header: "Kodo",
      details:
        "This was my capstone project. A learning portal that allowed students to learn from a variety of materials that are put up by other users! " +
        "It features lessons and quizzes, and a voice call system using the WebRTC API that was included to promote interactive learning.",
    }),
    new Work({
      src: this.getImageURL("figma_1.png"),
      header: "Design",
      details:
        "I am by no means a UI/UX designer, but decided to try my hand at it after seeing the work of my colleague during my internship and VA Insight. " +
        "The picture is a glimpse of the figma design that I created for the purpose of developing this webpage! You can see the bubbles there, which are his comments!",
      extraImages: [
        new ExtraWorkImage({
          src: this.getImageURL("figma_2.png"),
          caption:
            "An overall view of the designs I have for this personal branding project. " +
            "There are two main sections, the Web and Resume.",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("figma_3.png"),
          caption: "Designs for the web desktop's first iteration!",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("figma_4.png"),
          caption:
            "Designs for the web desktop's second iteration, and the one that I have decided to work with!",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("figma_5.png"),
          caption:
            "Designs for the resume's first iteration. It is a little hard to see, " +
            "so in the next image, I zoomed into the set that was the inspiration for the second (and last) iteration!",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("figma_6.png"),
          caption:
            "The final coloring of the first iteration of resumes. I started off with a combination of green and black. " +
            "After getting some feedback on the coloring, I decided to create two versions. A colored version using blue-green highlights, " +
            "followed by a black and white one. (1st page)",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("figma_7.png"),
          caption:
            "The final coloring of the first iteration of resumes. I started off with a combination of green and black. " +
            "After getting some feedback on the coloring, I decided to create two versions. A colored version using blue-green highlights, " +
            "followed by a black and white one. (2nd page)",
        }),
        new ExtraWorkImage({
          src: this.getImageURL("figma_8.png"),
          caption:
            "This is the second and last iteration of my resume, that was designed to match this webpage. After getting feedback on the content, " +
            "I decided to reduce the wordiness, either summarising them as point forms or removing them completely. Then, I was able to concise everything " +
            "to a single page.",
        }),
      ],
    }),
  ];

  getImageURL(imageName: string): any {
    // Somehow you can't separate the require,
    // Need to figure out, i really don't know why
    return require("@/assets/images/works/".concat(imageName));
  }

  get containerStyle(): any {
    if (this.isMobile) {
      return { "padding-top": "12vh", margin: "0" };
    } else {
      return { "padding-top": "5vh", margin: "0 2.3rem" };
    }
  }
}
</script>

<style scoped>
.fullscreen {
  background-color: var(--app-white);
}

#work-container {
  padding: 0 1rem;
}
</style>
