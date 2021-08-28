<template>
  <div class="drawer-container">
    <panZoom ref="panZoom" selector="#drawer" :options="panZoomOptions">
      <div id="drawer" class="drawer-wrapper">
        <scene :type="activeData.sceneType" />
        <drawer-item
          v-for="table in activeData.data"
          :key="table.tableIndex"
          :tableData="table"
          :tableActive="true"
          @start="handleDragStart"
          @stop="handleDragEnd"
          @delete-table="handleTableDelete"
        />
      </div>
    </panZoom>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData } from "@/components/constructor/types";
import { Model, Ref } from "vue-property-decorator";
import DrawerItem from "@/components/constructor/components/main/DrawerItem.vue";
import Scene from "@/components/constructor/components/main/Scene.vue";

@Options({
  name: "Drawer",
  components: { Scene, DrawerItem },
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  @Ref() readonly panZoom!: any;
  panZoomOptions = {
    initialZoom: 1,
    initialX: 0,
    initialY: 0,
    autocenter: false,
  };

  handleDragStart() {
    this.panZoom.$panZoomInstance.pause();
  }
  handleDragEnd() {
    this.panZoom.$panZoomInstance.resume();
  }
  handleTableDelete(tableIndex: number) {
    this.activeData.data = this.activeData.data?.filter(
      (t) => t.tableIndex !== tableIndex
    );
    this.activeData.tableSize = this.activeData.tableSize - 1;
  }
}
</script>

<style scoped lang="scss">
.drawer-container {
  display: block;
  overflow: hidden;
  border: 2px solid #ffffff;
  border-radius: 7px;
}
.drawer-wrapper {
  display: block;
  position: relative;
  height: 600px;
  min-width: 600px;
}
</style>
