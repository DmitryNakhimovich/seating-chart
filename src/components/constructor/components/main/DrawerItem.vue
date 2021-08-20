<template>
  <Draggable @start="$emit('dragstart')" @stop="$emit('dragend')">
    <component :is="tableType" :tableData="activeData" :tableType="tableType" />
  </Draggable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ISeatingData, TABLE_TYPE } from "@/components/constructor/types";
import { Model, Prop } from "vue-property-decorator";
import figures from "@/components/constructor/components/figures";

@Options({
  name: "DrawerItem",
  components: {
    ...figures,
  },
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
  @Prop() readonly tableType!: TABLE_TYPE;
}
</script>

<style scoped lang="scss"></style>
