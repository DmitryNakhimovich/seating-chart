<template>
  <Draggable
    :axis="activeData.isLocked ? 'none' : 'both'"
    :position-offset="startPos"
    :position="curPos"
    :disabled="!!activeData.isLocked"
    @stop="handleEnd"
  >
    <table-base :tableData="activeData" :tableActive="tableActive" />
  </Draggable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ISeatingData } from "@/components/constructor/types";
import { Model, Prop } from "vue-property-decorator";
import TableBase from "@/components/constructor/components/figures/TableBase.vue";
import { DraggableEvent } from "@braks/revue-draggable";

@Options({
  name: "DrawerItem",
  components: { TableBase },
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
  @Prop() readonly tableActive!: boolean;
  curPos = { x: 0, y: 0 };
  startPos = { x: 0, y: 0 };

  beforeMount() {
    this.startPos = { x: this.activeData.posX, y: this.activeData.posY };
  }

  handleEnd(e: DraggableEvent) {
    this.curPos = { x: e.data.x, y: e.data.y };
    this.activeData.posX = this.startPos.x + this.curPos.x;
    this.activeData.posY = this.startPos.y + this.curPos.y;
  }
}
</script>

<style scoped lang="scss"></style>
