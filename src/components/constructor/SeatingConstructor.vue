<template>
  <Header :userData="activeData" />

  <Main :userData="activeData" />

  <Footer
    @delete="$emit('delete')"
    @save="$emit('save')"
    @revert="$emit('revert')"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData } from "@/components/constructor/types";
import Header from "@/components/constructor/components/header/Header.vue";
import { Model } from "vue-property-decorator";
import Main from "@/components/constructor/components/main/Main.vue";
import Footer from "@/components/constructor/components/footer/Footer.vue";

@Options({
  name: "SeatingConstructor",
  components: {
    Footer,
    Main,
    Header,
  },
  emits: ["delete", "save", "revert"],
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
}
</script>
