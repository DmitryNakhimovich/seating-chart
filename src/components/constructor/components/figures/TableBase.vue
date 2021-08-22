<template>
  <div class="sog-mod">
    <div
      class="sog-mod__item"
      :data-sog-mod-type="activeData.tableType"
      :data-sog-mod-lock="Number(activeData.isLocked)"
      data-sog-mod-item-set="0"
    >
      <table-seats :tableData="activeData" />
      <table-controls />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableControls from "@/components/constructor/components/figures/TableControls.vue";
import TableSeats from "@/components/constructor/components/figures/TableSeats.vue";
import { Model } from "vue-property-decorator";
import { ISeatingData } from "@/components/constructor/types";

@Options({
  name: "TableBase",
  components: { TableSeats, TableControls },
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
}
</script>
