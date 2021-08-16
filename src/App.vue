<template>
  <v-app>
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "@/views/Home.vue";

@Options({
  name: "App",
  components: {
    Home,
  },
})
export default class extends Vue {}
</script>
