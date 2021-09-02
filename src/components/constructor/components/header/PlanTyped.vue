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
          @change="handlePlanChange"
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
          @input="handleTableSize"
        />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Сцена</span>
        <va-select
          v-model="activeData.sceneData"
          label="text"
          :options="optionsScene"
          :canClear="false"
          :canDeselect="false"
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
          <v-btn variant="outlined" @click="handlePlanDialog(false)"
            >Отменить</v-btn
          >
          <v-btn variant="outlined" @click="handlePlanDialog(true)">Да</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData, SEATING_PLAN } from "@/components/constructor/types";
import { Model, Watch } from "vue-property-decorator";
import {
  MAX_TABLES,
  MIN_TABLES,
  SCENE_TYPE_OPTIONS,
  SEATING_PLAN_OPTIONS,
  SEATING_TABLE_POSITION,
} from "@/components/constructor/constants";
import _ from "lodash";
import { debounce } from "@/plugins/helpers";

@Options({
  name: "PlanTyped",
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  optionsPlan = SEATING_PLAN_OPTIONS;
  dialogPlan = false;
  seatingPlanActive: SEATING_PLAN = SEATING_PLAN.ENG;
  tableSizeActive = 0;

  get optionsScene() {
    return _.cloneDeep(SCENE_TYPE_OPTIONS);
  }
  get classRulesTitle() {
    return [
      !_.isNumber(this.activeData.tableSize) || this.activeData.tableSize < 0
        ? "is-invalid"
        : "",
      "form-control",
    ].join(" ");
  }

  @Watch("activeData.tableSize")
  handleTableSizeChange(newVal: any) {
    if (_.isNumber(newVal) && newVal >= 0 && newVal <= MAX_TABLES) {
      this.tableSizeActive = newVal;
    } else {
      throw new TypeError("tableSize needs to be Number type!");
    }
  }

  beforeMount() {
    this.seatingPlanActive = this.activeData?.seatingPlan ?? SEATING_PLAN.ENG;
    this.tableSizeActive = this.activeData?.tableSize ?? 0;
  }

  async handlePlanChange() {
    if (_.isEmpty(this.activeData.data)) {
      this.dialogPlan = false;
      await this.$nextTick();
      this.handlePlanDialog(true);
    } else {
      this.dialogPlan = true;
    }
  }
  handlePlanDialog(isAccept = false) {
    const curSeats =
      _.cloneDeep(
        SEATING_TABLE_POSITION[this.seatingPlanActive]?.slice(
          0,
          this.activeData.tableSize
        )
      ) ?? [];
    if (isAccept) {
      this.activeData.seatingPlan = this.seatingPlanActive;
      this.activeData.data = curSeats;
      this.activeData.tableSize = curSeats.length;
    } else {
      this.seatingPlanActive = this.activeData.seatingPlan!;
    }
    this.dialogPlan = false;
  }
  @debounce(200)
  handleTableSize() {
    const curSeats =
      _.cloneDeep(SEATING_TABLE_POSITION[this.activeData.seatingPlan!]) ?? [];
    if (
      _.isNumber(this.tableSizeActive) &&
      this.tableSizeActive >= MIN_TABLES &&
      this.tableSizeActive <= curSeats.length
    ) {
      if (this.activeData.tableSize < this.tableSizeActive) {
        const newData = [];
        for (let idx = 0; idx < curSeats.length; idx += 1) {
          if (!this.activeData.data?.some((d) => d.tableIndex === idx)) {
            newData.push(_.cloneDeep(curSeats[idx]));
          }
          if (
            newData.length ===
            this.tableSizeActive - this.activeData.tableSize
          ) {
            break;
          }
        }
        this.activeData.data = this.activeData.data.concat(newData);
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
