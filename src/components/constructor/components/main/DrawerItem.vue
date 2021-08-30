<template>
  <Draggable
    :axis="activeData.isLocked ? 'none' : 'both'"
    :position-offset="startPos"
    :position="curPos"
    :disabled="!!activeData.isLocked"
    @stop="handleEnd"
  >
    <table-base
      :tableData="activeData"
      :tableActive="tableActive"
      :userData="userData"
    />
  </Draggable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ISeatingData, IUserData } from "@/components/constructor/types";
import { Model, Prop, Watch } from "vue-property-decorator";
import TableBase from "@/components/constructor/components/figures/TableBase.vue";
import { DraggableEvent } from "@braks/revue-draggable";

@Options({
  name: "DrawerItem",
  components: { TableBase },
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
  @Prop() readonly tableActive!: boolean;
  @Prop() readonly userData!: IUserData;
  curPos = { x: 0, y: 0 };
  startPos = { x: 0, y: 0 };

  @Watch("activeData", { immediate: true })
  onActiveDataChanged(newVal: ISeatingData, oldVal: ISeatingData) {
    if (newVal?.posX !== oldVal?.posX || newVal?.posY !== oldVal?.posY) {
      this.startPos = { x: this.activeData.posX, y: this.activeData.posY };
      this.curPos = { x: 0, y: 0 };
    }
  }

  handleEnd(e: DraggableEvent) {
    this.curPos = { x: e.data.x, y: e.data.y };
    this.activeData.posX = this.startPos.x + this.curPos.x;
    this.activeData.posY = this.startPos.y + this.curPos.y;
  }
}
</script>

<style scoped lang="scss"></style>
