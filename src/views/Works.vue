<template>
  <v-layout class="fullscreen">
    <v-container>
      <title-text
        class="mb-12"
        justify="start"
        main="Works."
        secondary="Projects"
        divider-color="var(--app-yellow)"
        divider-width="3.5rem"
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
import { Component, Vue } from "vue-property-decorator";
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
    }),
  ];

  getImageURL(imageName: string): any {
    // Somehow you can't separate the require,
    // Need to figure out, i really don't know why
    return require("@/assets/images/works/".concat(imageName));
  }
}
</script>

<style scoped>
.fullscreen {
  background-color: var(--app-white);
}

.fullscreen > .container {
  padding-top: 5vh;
}

#work-container {
  padding: 0 1rem;
}
</style>
