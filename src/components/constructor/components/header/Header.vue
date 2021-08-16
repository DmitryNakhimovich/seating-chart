<template>
  <v-container fluid class="main-bg">
    <type-selector :userData="activeData" />

    <v-divider class="divider" thickness="2" />

    <plan-typed :userData="activeData" />
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData } from "@/components/constructor/types";
import TypeSelector from "@/components/constructor/components/header/TypeSelector.vue";
import { Model } from "vue-property-decorator";
import PlanTyped from "@/components/constructor/components/header/PlanTyped.vue";

@Options({
  name: "Header",
  components: { PlanTyped, TypeSelector },
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
}
</script>

<style scoped lang="scss">
.divider {
  border-color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
