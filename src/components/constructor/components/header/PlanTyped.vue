<template>
  <v-row justify="center">
    <v-col sm="4" cols="12">
      <label>
        <span class="header-input-title">Подтип рассадки</span>
        <va-select
          ref="seatingPlanSelect"
          v-model="activeData.seatingPlan"
          :options="optionsPlan"
          text-by="text"
          value-by="value"
          @update:modelValue="handleSelectPlan"
        />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label>
        <span class="header-input-title">Количество столов</span>
        <va-input
          v-model="activeData.tableSize"
          :rules="[(value) => value > 0 || errors.inputNumberMoreZero]"
          type="number"
        />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label>
        <span class="header-input-title">Сцена</span>
        <va-select
          ref="sceneTypeSelect"
          v-model="activeData.sceneType"
          :options="optionsScene"
          text-by="text"
          value-by="value"
          @update:modelValue="handleSelectScene"
        />
      </label>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData } from "@/components/constructor/types";
import { Model } from "vue-property-decorator";
import {
  ERROR_TEXT,
  SCENE_TYPE_OPTIONS,
  SEATING_PLAN_OPTIONS,
} from "@/components/constructor/constants";

@Options({
  name: "PlanTyped",
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  errors = ERROR_TEXT;
  optionsPlan = SEATING_PLAN_OPTIONS;
  optionsScene = SCENE_TYPE_OPTIONS;
  $refs!: {
    seatingPlanSelect: HTMLElement;
    sceneTypeSelect: HTMLElement;
  };

  handleSelectPlan() {
    this.$refs.seatingPlanSelect.blur();
  }
  handleSelectScene() {
    this.$refs.sceneTypeSelect.blur();
  }
}
</script>

<style scoped lang="scss"></style>
