<template>
  <div class="sog-mod__seats">
    <div
      v-for="user in usersList"
      :key="user.id"
      :data-sog-mod-seat-id="user.userIndex"
      :data-sog-mod-seat-status="Number(!!user.isEmpty)"
      :title="user.name"
    >
      <span>{{ user.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ISeatingData } from "@/components/constructor/types";
import _ from "lodash";

@Options({
  name: "TableSeats",
})
export default class extends Vue {
  @Prop() readonly tableData!: ISeatingData;

  get usersList() {
    let res = _.sortBy(this.tableData.users, ["userIndex"]);
    const len = res.length ?? 0;
    for (let idx = len; idx < this.tableData.seatsSize; idx += 1) {
      res.push({
        id: idx,
        userIndex: idx,
        name: idx,
        isEmpty: true,
        isLocked: false,
      });
    }
    return res;
  }
}
</script>
