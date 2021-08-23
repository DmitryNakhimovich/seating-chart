<template>
  <Draggable @start="$emit('dragstart')" @stop="$emit('dragend')">
    <table-base :tableData="activeData" :tableActive="tableActive" />
  </Draggable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ISeatingData } from "@/components/constructor/types";
import { Model, Prop } from "vue-property-decorator";
import TableBase from "@/components/constructor/components/figures/TableBase.vue";

@Options({
  name: "DrawerItem",
  components: { TableBase },
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
  @Prop() readonly tableActive!: boolean;
}
</script>

<style scoped lang="scss"></style>
