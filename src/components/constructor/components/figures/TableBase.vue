<template>
  <div class="sog-mod-wrapper">
    <div class="sog-mod">
      <div
        class="sog-mod__item"
        :data-sog-mod-active-side="activeData.activeSides"
        :data-sog-mod-type="activeData.tableType"
        :data-sog-mod-lock="Number(!!activeData.isLocked)"
        :data-sog-mod-item-set="Number(tableActive)"
      >
        <table-seats :tableData="activeData" />
        <table-controls
          :tableData="activeData"
          @delete-table="$emit('delete-table', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableControls from "@/components/constructor/components/figures/TableControls.vue";
import TableSeats from "@/components/constructor/components/figures/TableSeats.vue";
import { Model, Prop } from "vue-property-decorator";
import { ISeatingData } from "@/components/constructor/types";

@Options({
  name: "TableBase",
  components: { TableSeats, TableControls },
  emits: ["delete-table"],
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
  @Prop() readonly tableActive!: boolean;
}
</script>
