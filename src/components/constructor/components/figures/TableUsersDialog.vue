<template>
  <v-dialog
    v-model="dialogUsers"
    @click:outside="handleUsersDialog(false)"
    @keydown="handleUsersDialog(false)"
  >
    <v-card width="500">
      <v-card-title>Настройки стола</v-card-title>
      <v-card-subtitle
        >Перетащите карту гостя за конкретный стол</v-card-subtitle
      >
      <v-card-text class="guests-content">
        <v-row>
          <v-col sm="6" col="12">
            <v-card-header>Список гостей</v-card-header>
            <va-select
              v-model="guestsCategory"
              label="name"
              valueProp="id"
              :options="getCategory"
              :canClear="false"
              :canDeselect="false"
            />
            <div v-if="isLoading" class="spinner-border text-primary">
              <span class="visually-hidden">Loading...</span>
            </div>
            <sortable
              v-if="!isLoading"
              class="list-group guests-list"
              :list="guestsAll"
              group="guests"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item">
                  {{ element.name }}
                </div>
              </template>
            </sortable>
          </v-col>
          <v-col sm="6" col="12">
            <v-card-header>Стол {{ activeData.tableIndex + 1 }}</v-card-header>
            <sortable
              class="list-group guests-list"
              :list="guestsActive"
              group="guests"
              itemKey="name"
            >
              <template #item="{ element, index }">
                <div class="list-group-item guests-list-item">
                  {{ index }}. {{ element.name }}
                  <span
                    class="icon-sog-mod__remote"
                    title="Очистить"
                    @click="handleRemoveGuest(index)"
                  ></span>
                </div>
              </template>
            </sortable>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="outlined" @click="handleUsersDialog(false)"
          >Отменить</v-btn
        >
        <v-btn variant="outlined" @click="handleUsersDialog(true)"
          >Сохранить</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Model, Watch } from "vue-property-decorator";
import { ISeatingData, IUser } from "@/components/constructor/types";
import draggable from "vuedraggable";
import {
  getGuestCategoryList,
  getGuestsListByCategory,
} from "@/services/requests";
import { debounce } from "@/plugins/helpers";
import _ from "lodash";

@Options({
  name: "TableUsersDialog",
  components: {
    sortable: draggable,
  },
  emits: ["dialog-close"],
})
export default class extends Vue {
  @Model("tableData") activeData!: ISeatingData;
  @Model("isOpen") dialogUsers!: boolean;
  guestsCategory = "";
  guestsAll: IUser[] = [];
  guestsActive: IUser[] = [];
  isLoading = false;

  @Watch("guestsCategory")
  @debounce(300)
  async onGuestsCategoryChange() {
    this.isLoading = true;
    this.guestsAll = await this.getGuests();
    this.isLoading = false;
  }

  beforeMount() {
    this.guestsActive = _.cloneDeep(this.activeData.users) ?? [];
  }

  async getCategory() {
    return await getGuestCategoryList();
  }
  async getGuests() {
    if (_.isNil(this.guestsCategory)) {
      return [];
    }
    const guests =
      (await getGuestsListByCategory(parseInt(this.guestsCategory))) ?? [];
    return guests?.filter((g: IUser) =>
      this.guestsActive?.every((ga: IUser) => ga.id !== g.id)
    );
  }

  handleRemoveGuest(index: number) {
    this.guestsAll.push(...this.guestsActive.splice(index, 1));
  }
  handleUsersDialog(isAccept = false) {
    if (isAccept) {
      this.guestsActive =
        this.guestsActive?.map((g: IUser, i: number) => ({
          ...g,
          userIndex: i,
        })) ?? [];
      this.activeData.users = _.cloneDeep(this.guestsActive);
    } else {
      this.guestsActive = _.cloneDeep(this.activeData.users) ?? [];
    }
    this.dialogUsers = false;
    this.$emit("dialog-close");
    this.onGuestsCategoryChange();
  }
}
</script>

<style scoped lang="scss">
.guests-content {
  min-height: 360px;
}
</style>
