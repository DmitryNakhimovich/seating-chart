<template>
  <v-row justify="center">
    <v-col sm="4" cols="12">
      <label>
        <span class="header-input-title">Название рассадки</span>
        <va-input
          v-model="activeData.title"
          :rules="[(value) => value.length || errors.inputNotEmpty]"
        />
      </label>
    </v-col>
    <v-col sm="4" cols="12">
      <label>
        <span class="header-input-title">Тип рассадки</span>
        <va-select
          ref="seatingTypeSelect"
          v-model="activeData.seatingType"
          :options="options"
          text-by="text"
          value-by="value"
          @update:modelValue="handleSelect"
        />
      </label>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUserData } from "@/components/constructor/types";
import { Model } from "vue-property-decorator";
import {
  ERROR_TEXT,
  SEATING_TYPE_OPTIONS,
} from "@/components/constructor/constants";

@Options({
  name: "TypeSelector",
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  errors = ERROR_TEXT;
  options = SEATING_TYPE_OPTIONS;
  $refs!: {
    seatingTypeSelect: HTMLElement;
  };

  handleSelect() {
    this.$refs.seatingTypeSelect.blur();
  }
}
</script>

<style scoped lang="scss"></style>
