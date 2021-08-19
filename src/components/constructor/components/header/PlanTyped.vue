<template>
  <v-row justify="center">
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Подтип рассадки</span>
        <va-select
          v-model="activeData.seatingPlan"
          label="text"
          :options="optionsPlan"
          :canClear="false"
        />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Количество столов</span>
        <input
          :class="classRulesTitle"
          v-model="activeData.tableSize"
          type="number"
          required
          min="0"
          max="30"
        />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Сцена</span>
        <va-select
          v-model="activeData.sceneType"
          label="text"
          :options="optionsScene"
          :canClear="false"
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
  SCENE_TYPE_OPTIONS,
  SEATING_PLAN_OPTIONS,
} from "@/components/constructor/constants";
import _ from "lodash";

@Options({
  name: "PlanTyped",
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  optionsPlan = SEATING_PLAN_OPTIONS;
  optionsScene = SCENE_TYPE_OPTIONS;

  get classRulesTitle() {
    return [
      !_.isNumber(this.activeData.tableSize) || this.activeData.tableSize < 0
        ? "is-invalid"
        : "",
      "form-control",
    ].join(" ");
  }
}
</script>

<style scoped lang="scss"></style>
