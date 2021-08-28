<template>
  <div class="sog-mod-wrapper">
    <div class="sog-mod">
      <div class="sog-mod__scene" :data-sog-scene-type="type">
        <span>Сцена</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { SCENE_TYPE } from "@/components/constructor/types";
import { Prop } from "vue-property-decorator";

@Options({
  name: "Scene",
})
export default class extends Vue {
  @Prop() readonly type!: SCENE_TYPE;
}
</script>

<style scoped lang="scss"></style>
