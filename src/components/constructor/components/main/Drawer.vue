<template>
  <div class="drawer-container">
    <div class="drawer-wrapper">
      <drawer-item
        v-for="table in activeData.data"
        :key="table.tableIndex"
        :tableData="table"
        :tableType="tableType(table)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  ISeatingData,
  IUserData,
  SEATING_TYPE,
  TABLE_TYPE,
} from "@/components/constructor/types";
import { Model } from "vue-property-decorator";
import DrawerItem from "@/components/constructor/components/main/DrawerItem.vue";
import { SEATING_TABLE_POSITION } from "@/components/constructor/constants";
import _ from "lodash";

@Options({
  name: "Drawer",
  components: { DrawerItem },
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;

  tableType(table: ISeatingData) {
    let res;
    if (this.activeData.seatingType === SEATING_TYPE.TYPED) {
      res = _.get(
        SEATING_TABLE_POSITION,
        [this.activeData.seatingPlan!],
        []
      )?.find((t) => t.tableIndex === table.tableIndex)?.tableType;
    } else {
      res = this.activeData.tableType;
    }
    return res ?? TABLE_TYPE.SQUARE_SMALL;
  }
}
</script>

<style scoped lang="scss">
.drawer-container {
  display: block;
  overflow: hidden;
  overflow-x: auto;
  border: 2px solid #ffffff;
  border-radius: 7px;
}
.drawer-wrapper {
  display: block;
  position: relative;
  height: 600px;
  min-width: 600px;
}
</style>
