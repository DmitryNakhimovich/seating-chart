<template>
  <v-container fluid class="main-bg">
    <form class="needs-validation">
      <type-selector :userData="activeData" />

      <v-divider class="divider" thickness="4" />

      <plan-typed v-if="isTyped" :userData="activeData" />
      <plan-free v-if="!isTyped" :userData="activeData" />
    </form>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData, SEATING_TYPE } from "@/components/constructor/types";
import TypeSelector from "@/components/constructor/components/header/TypeSelector.vue";
import { Model } from "vue-property-decorator";
import PlanTyped from "@/components/constructor/components/header/PlanTyped.vue";
import PlanFree from "@/components/constructor/components/header/PlanFree.vue";

@Options({
  name: "Header",
  components: { PlanFree, PlanTyped, TypeSelector },
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;

  get isTyped() {
    return this.activeData.seatingType === SEATING_TYPE.TYPED;
  }
}
</script>

<style scoped lang="scss">
.divider {
  opacity: 1;
  border-color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
