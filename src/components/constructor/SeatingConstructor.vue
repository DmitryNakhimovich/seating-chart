<template>
  <Header :userData="activeData" />

  <Main :userData="activeData" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData } from "@/components/constructor/types";
import Header from "@/components/constructor/components/header/Header.vue";
import { Model } from "vue-property-decorator";
import Main from "@/components/constructor/components/main/Main.vue";

@Options({
  name: "SeatingConstructor",
  components: {
    Main,
    Header,
  },
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
}
</script>
