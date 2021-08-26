<template>
  <div class="sog-mod__table">
    <div class="sog-mod__icon-add"></div>
    <div class="sog-mod__table-name">
      <span>Стол {{ activeData.tableIndex + 1 }}</span>
    </div>
    <div class="sog-mod__table-btn">
      <span
        data-sog-mod-action="list"
        class="sog-mod__table-icon-btn icon-sog-mod__list"
        title="Список гостей/Настройка"
        @click="dialogUsers = true"
      ></span>
      <span
        data-sog-mod-action="lock"
        class="sog-mod__table-icon-btn icon-sog-mod__lock"
        title="Закреплено/Открепить"
        @click="handleLock(false)"
      ></span>
      <span
        data-sog-mod-action="unlock"
        class="sog-mod__table-icon-btn icon-sog-mod__unlock"
        title="Откреплено/Закрепить"
        @click="handleLock(true)"
      ></span>
      <span
        data-sog-mod-action="remote"
        class="sog-mod__table-icon-btn icon-sog-mod__remote"
        title="Очистить"
        @click="$emit('delete-table', activeData.tableIndex)"
      ></span>
    </div>
    <table-users-dialog
      :is-open="dialogUsers"
      :tableData="activeData"
      @dialog-close="dialogUsers = false"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Model } from "vue-property-decorator";
import { ISeatingData } from "@/components/constructor/types";
import TableUsersDialog from "@/components/constructor/components/figures/TableUsersDialog.vue";

@Options({
  name: "TableControls",
  emits: ["delete-table"],
  components: {
    TableUsersDialog,
  },
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
  dialogUsers = false;

  handleLock(lock = false) {
    this.activeData.isLocked = lock;
  }
}
</script>
