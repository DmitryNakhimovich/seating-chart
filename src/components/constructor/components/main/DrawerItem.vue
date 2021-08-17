<template>
  <Draggable>
    <component :is="tableType" :tableData="activeData" />
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
  @Prop() tableType!: TABLE_TYPE;

  created() {
    console.log({ ...figures });
  }
}
</script>

<style scoped lang="scss"></style>
