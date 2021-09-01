<template>
  <v-row justify="center">
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Список объектов</span>
        <va-select
          v-model="activeData.tableType"
          label="text"
          :options="optionsType"
          :canClear="false"
          :canDeselect="false"
        />
      </label>
    </v-col>
    <v-col cols="auto" class="btn-col">
      <v-btn variant="outlined" class="btn-add" @click="handleAddTable"
        >Добавить новый стол</v-btn
      >
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
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  ISeatingData,
  IUserData,
  SEATING_PLAN,
} from "@/components/constructor/types";
import { Model } from "vue-property-decorator";
import {
  MAX_TABLES,
  MIN_TABLES,
  SCENE_TYPE_OPTIONS,
  SEATING_TABLE_FREE,
  SEATING_TABLE_POSITION,
  TABLE_TYPE_OPTIONS,
} from "@/components/constructor/constants";
import _ from "lodash";

@Options({
  name: "PlanFree",
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  optionsType = TABLE_TYPE_OPTIONS;
  optionsScene = SCENE_TYPE_OPTIONS;

  handleAddTable() {
    if (
      !_.isNil(this.activeData.tableType) &&
      _.isNumber(this.activeData.tableSize) &&
      this.activeData.tableSize >= MIN_TABLES &&
      this.activeData.tableSize < MAX_TABLES
    ) {
      let newData: ISeatingData;
      let next = null;
      for (let idx = 0; idx < MAX_TABLES; idx += 1) {
        if (!this.activeData.data?.some((d) => d.tableIndex === idx)) {
          next = idx;
        }
        if (!_.isNil(next)) {
          break;
        }
      }
      next = next ?? this.activeData.tableSize;
      newData = _.cloneDeep(SEATING_TABLE_FREE[this.activeData.tableType!]);
      newData.tableIndex = next;
      newData.posX =
        _.get(SEATING_TABLE_POSITION, [SEATING_PLAN.ENG, next])?.posX ?? 0;
      newData.posY =
        _.get(SEATING_TABLE_POSITION, [SEATING_PLAN.ENG, next])?.posY ?? 0;
      this.activeData.data?.push(newData);
      this.activeData.tableSize = this.activeData.tableSize + 1;
    }
  }
}
</script>

<style scoped lang="scss">
.btn-add {
  background-color: white;
  height: 40px !important;
}
.btn-col {
  display: flex;
  align-items: flex-end;
}
</style>
