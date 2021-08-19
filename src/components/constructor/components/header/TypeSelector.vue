<template>
  <v-row justify="center">
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Название рассадки</span>
        <input :class="classRulesTitle" v-model="activeData.title" required />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label class="form-label-group">
        <span class="header-input-title">Тип рассадки</span>
        <va-select
          v-model="activeData.seatingType"
          label="text"
          :options="options"
          :canClear="false"
        />
      </label>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData } from "@/components/constructor/types";
import { Model } from "vue-property-decorator";
import { SEATING_TYPE_OPTIONS } from "@/components/constructor/constants";

@Options({
  name: "TypeSelector",
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  options = SEATING_TYPE_OPTIONS;

  get classRulesTitle() {
    return [
      !this.activeData.title.length ? "is-invalid" : "",
      "form-control",
    ].join(" ");
  }
}
</script>

<style scoped lang="scss"></style>
