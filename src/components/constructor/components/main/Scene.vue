<template>
  <Draggable
    :axis="activeData.isLocked ? 'none' : 'both'"
    :position-offset="startPos"
    :position="curPos"
    :disabled="!!activeData.isLocked"
    @stop="handleEnd"
  >
    <div class="sog-mod-wrapper">
      <div class="sog-mod">
        <div class="sog-mod__scene" :data-sog-scene-type="activeData.sceneType">
          <span>Сцена</span>
        </div>
      </div>
    </div>
  </Draggable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ISceneData } from "@/components/constructor/types";
import { Model, Watch } from "vue-property-decorator";
import { DraggableEvent } from "@braks/revue-draggable";

@Options({
  name: "Scene",
})
export default class extends Vue {
  @Model("sceneData") activeData!: ISceneData;
  curPos = { x: 0, y: 0 };
  startPos = { x: 0, y: 0 };

  @Watch("activeData", { immediate: true })
  onActiveDataChanged(newVal: ISceneData, oldVal: ISceneData) {
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
