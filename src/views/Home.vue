<template>
  <seating-constructor :user-data="activeData" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SeatingConstructor from "@/components/constructor/SeatingConstructor.vue";
import { IUserData } from "@/components/constructor/types";

@Options({
  name: "Home",
  components: {
    SeatingConstructor,
  },
})
export default class extends Vue {
  userData: IUserData[] = [];
  activeData: IUserData | null = null;
}
</script>
