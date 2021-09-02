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
      <span
        v-if="isRotatable && !activeData.isLocked"
        data-sog-mod-action="rotate"
        class="sog-mod__table-icon-btn icon-sog-mod__rotate"
        title="Повернуть стол"
        @click="handleRotate"
      >
        <v-icon>mdi-rotate-right</v-icon>
      </span>
    </div>
    <table-users-dialog
      :is-open="dialogUsers"
      :tableData="activeData"
      :userData="userData"
      @dialog-close="dialogUsers = false"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Model, Prop } from "vue-property-decorator";
import {
  ISeatingData,
  IUserData,
  TABLE_TYPE,
} from "@/components/constructor/types";
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
  @Prop() readonly userData!: IUserData;
  dialogUsers = false;

  get isRotatable() {
    return (
      this.activeData.tableType === TABLE_TYPE.RECT_12_HOR ||
      this.activeData.tableType === TABLE_TYPE.RECT_12_VERT
    );
  }
  handleLock(lock = false) {
    this.activeData.isLocked = lock;
  }
  handleRotate() {
    if (this.activeData.tableType === TABLE_TYPE.RECT_12_HOR) {
      this.activeData.tableType = TABLE_TYPE.RECT_12_VERT;
    } else {
      this.activeData.tableType = TABLE_TYPE.RECT_12_HOR;
    }
  }
}
</script>
