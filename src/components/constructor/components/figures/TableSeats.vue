<template>
  <div class="sog-mod__seats">
    <div
      v-for="user in usersList"
      :key="user.id"
      :data-sog-mod-seat-id="user.userIndex"
      :data-sog-mod-seat-status="Number(!user.isEmpty)"
      :title="user.name"
    >
      <span>{{ getUserName(user.name) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import {
  ISeatingData,
  TABLE_SIDES,
  TABLE_TYPE,
} from "@/components/constructor/types";
import _ from "lodash";

@Options({
  name: "TableSeats",
})
export default class extends Vue {
  @Prop() readonly tableData!: ISeatingData;

  get usersList() {
    const TOP =
      this.tableData.tableType === TABLE_TYPE.RECT_6_HOR
        ? [0, 1, 2, 3, 4, 5]
        : [0, 1];
    const LEFT_RIGHT =
      this.tableData.tableType === TABLE_TYPE.RECT_6_HOR
        ? [6, 7, 14, 15]
        : [2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15];
    const curSides =
      this.tableData.activeSides === TABLE_SIDES.TOP
        ? TOP
        : this.tableData.activeSides === TABLE_SIDES.LEFT_RIGHT
        ? LEFT_RIGHT
        : [];
    const res = _.sortBy(this.tableData?.users, ["userIndex"]);
    for (let idx = 0; idx < this.tableData.seatsSize; idx += 1) {
      if (res[idx]?.userIndex !== idx) {
        res.splice(idx, 0, {
          id: idx,
          userIndex: idx,
          name: idx + 1,
          isEmpty: true,
        });
      }
    }
    for (let idx = 0; idx < this.tableData.seatsSize; idx += 1) {
      if (curSides.length && !curSides.includes(idx)) {
        res.splice(idx, 0, {
          id: 30 + idx,
          userIndex: 30 + idx,
          name: 30 + idx,
          isEmpty: true,
          isLocked: true,
        });
      }
    }
    res.splice(this.tableData.seatsSize, 99);
    return res;
  }

  getUserName(name: string | number) {
    return _.isNumber(name)
      ? name.toString()
      : name
          .toString()
          .split(" ")
          .map((c: string) => c[0]?.toUpperCase())
          .slice(0, 2)
          .join("");
  }
}
</script>
