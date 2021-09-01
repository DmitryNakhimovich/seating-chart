<template>
  <v-container fluid>
    <v-row>
      <v-col clos="12" class="text-center">
        <v-btn class="footer-btn" variant="outlined" @click="$emit('revert')"
          >Отменить</v-btn
        >
        <v-btn class="footer-btn" variant="outlined" @click="$emit('delete')"
          >Удалить</v-btn
        >
        <v-btn class="footer-btn" variant="outlined" @click="$emit('save')"
          >Сохранить</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Footer",
  emits: ["delete", "save", "revert"],
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.footer-btn {
  margin: 0 10px;
}
</style>
