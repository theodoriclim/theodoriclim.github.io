<template>
  <v-row id="contact-icons-container" class="ml-0 mt-2">
    <v-tooltip top v-for="(contactIcon, index) in contactIcons" :key="index">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          class="ml-6 mr-6"
          :href="contactIcon.onClickAction"
          v-bind="attrs"
          v-on="on"
        >
          <icon :icon="contactIcon.src"></icon>
        </v-btn>
      </template>
      <span>{{ contactIcon.tooltip }}</span>
    </v-tooltip>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Icon } from "@iconify/vue2";
import { ContactIcon } from "@/models/ContactIcon";

@Component({
  components: {
    Icon,
  },
})
export default class ContactIcons extends Vue {
  private readonly contactIcons: ContactIcon[] = [
    new ContactIcon({
      src: "bxs:phone",
      tooltip: "+65 9720 6223",
      onClickAction: "tel:+6597206223",
    }),
    new ContactIcon({
      src: "clarity:email-solid",
      tooltip: "theodorickeithlim@gmail.com",
      onClickAction: "mailto:theodorickeithlim@gmail.com",
    }),
    new ContactIcon({
      src: "akar-icons:github-fill",
      tooltip: "https://github.com/cowturtle",
      onClickAction: "https://github.com/cowturtle",
    }),
  ];
}
</script>

<style scoped>
.v-btn::before {
  background-color: transparent;
}

.v-btn > .v-btn__content > svg {
  color: white;
}

.v-btn:hover > .v-btn__content > svg {
  color: var(--app-blue);
  transition: 0.75s;
}

.v-tooltip__content {
  background-color: var(--app-blue);
  color: var(--app-white);
}
</style>
