<template>
  <v-row justify="center">
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Подтип рассадки</span>
        <va-select
          v-model="seatingPlanActive"
          label="text"
          :options="optionsPlan"
          :canClear="false"
          :canDeselect="false"
          @change="dialogPlan = true"
        />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Количество столов</span>
        <input
          v-model="tableSizeActive"
          :class="classRulesTitle"
          type="number"
          required
          min="0"
          max="30"
          @change="handleTableSize"
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
    <v-dialog
      v-model="dialogPlan"
      @click:outside="handlePlanDialog(false)"
      @keydown="handlePlanDialog(false)"
    >
      <v-card>
        <v-card-title>Вы уверены?</v-card-title>
        <v-card-text
          >При изменении подтипа рассадки, все данные по столам будут
          удалены!</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="handlePlanDialog(false)">Отменить</v-btn>
          <v-btn @click="handlePlanDialog(true)">Да</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData, SEATING_PLAN } from "@/components/constructor/types";
import { Model } from "vue-property-decorator";
import {
  SCENE_TYPE_OPTIONS,
  SEATING_PLAN_OPTIONS,
  SEATING_TABLE_POSITION,
} from "@/components/constructor/constants";
import _ from "lodash";

@Options({
  name: "PlanTyped",
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  optionsPlan = SEATING_PLAN_OPTIONS;
  optionsScene = SCENE_TYPE_OPTIONS;
  dialogPlan = false;
  seatingPlanActive: SEATING_PLAN = SEATING_PLAN.ENG;
  tableSizeActive = 0;

  get classRulesTitle() {
    return [
      !_.isNumber(this.activeData.tableSize) || this.activeData.tableSize < 0
        ? "is-invalid"
        : "",
      "form-control",
    ].join(" ");
  }

  beforeMount() {
    this.seatingPlanActive = this.activeData?.seatingPlan ?? SEATING_PLAN.ENG;
    this.tableSizeActive = this.activeData?.tableSize ?? 0;
  }

  handlePlanDialog(isAccept = false) {
    if (isAccept) {
      this.activeData.seatingPlan = this.seatingPlanActive;
      this.activeData.data = SEATING_TABLE_POSITION[
        this.seatingPlanActive
      ]?.slice(0, this.activeData.tableSize);
    } else {
      this.seatingPlanActive = this.activeData.seatingPlan!;
    }
    this.dialogPlan = false;
  }
  handleTableSize() {
    if (
      _.isNumber(this.tableSizeActive) &&
      this.tableSizeActive >= 0 &&
      this.tableSizeActive <= 30
    ) {
      if (this.activeData.tableSize < this.tableSizeActive) {
        this.activeData.data = this.activeData.data.concat(
          SEATING_TABLE_POSITION[this.activeData.seatingPlan!]?.slice(
            this.activeData.tableSize,
            this.tableSizeActive
          )
        );
      } else {
        this.activeData.data = this.activeData.data.slice(
          0,
          this.tableSizeActive
        );
      }
      this.activeData.tableSize = this.tableSizeActive;
    } else {
      this.tableSizeActive = this.activeData.tableSize;
    }
  }
}
</script>

<style scoped lang="scss"></style>
