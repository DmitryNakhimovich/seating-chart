<template>
  <div v-if="isLoading" class="spinner-wrapper">
    <div class="spinner-border text-primary">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <v-container v-if="!isLoading && !isSelected" fluid>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn
          variant="outlined"
          :disabled="userData.length > 0"
          @click="handleCreate"
          >Создать новую рассадку</v-btn
        >
      </v-col>
      <v-col cols="12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Название</th>
              <th scope="col">Тип рассадки</th>
              <th scope="col">Дата</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!userData.length">
              <td colspan="4" class="text-center">
                У вас ни одной версии рассадки. <br />
                Создайте рассадку гостей на ваше мероприятие...
              </td>
            </tr>
            <tr v-for="data in userData" :key="data.id">
              <td>{{ data.title }}</td>
              <td>{{ getPlanTitle(data) }}</td>
              <td>{{ getDateTitle(data) }}</td>
              <td>
                <span
                  class="icon-sog-mod__list table-action"
                  title="Редактировать"
                  @click="handleEditOne(data)"
                ></span>
                <span
                  class="icon-sog-mod__remote table-action"
                  title="Удалить"
                  @click="handleDeleteOne(data)"
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog
    v-model="dialogError"
    @click:outside="dialogError = false"
    @keydown="dialogError = false"
  >
    <v-card>
      <v-card-title>Произошла ошибка!</v-card-title>
      <v-card-text
        >Извините, в ходе работы приложения произошла непредвиденная ошибка...
        Попробуйте еще раз</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="outlined" @click="dialogError = false">Ок</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <seating-constructor
    v-if="!isLoading && isSelected"
    :user-data="activeData"
    @delete="handleDelete"
    @save="handleSave"
    @view="$emit('view')"
    @revert="handleRevert"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SeatingConstructor from "@/components/constructor/SeatingConstructor.vue";
import {
  IUserData,
  SCENE_TYPE,
  SEATING_PLAN,
  SEATING_TYPE,
  TABLE_TYPE,
} from "@/components/constructor/types";
import {
  deleteConstructorData,
  getConstructorDataList,
  postConstructorData,
  putConstructorData,
} from "@/services/requests";
import {
  SEATING_PLAN_OPTIONS,
  SEATING_TYPE_OPTIONS,
} from "@/components/constructor/constants";
import _ from "lodash";

@Options({
  name: "Home",
  components: {
    SeatingConstructor,
  },
})
export default class extends Vue {
  userData: IUserData[] = [];
  activeData: IUserData | null = null;
  isLoading = true;
  isSelected = false;
  dialogError = false;

  async beforeMount() {
    this.userData = await this.getUserData();
    this.isLoading = false;
  }

  async getUserData() {
    try {
      return await getConstructorDataList();
    } catch (e) {
      this.dialogError = true;
      return [];
    }
  }
  getPlanTitle(data: IUserData) {
    return data.seatingPlan
      ? SEATING_PLAN_OPTIONS.find((p) => p.value === data.seatingPlan)?.text
      : data.seatingType &&
          SEATING_TYPE_OPTIONS.find((p) => p.value === data.seatingType)?.text;
  }
  getDateTitle(data: IUserData) {
    const date = new Date();
    if (!_.isNil(data.createDate)) {
      date.setTime(parseInt(data.createDate.toString()) * 1000);
    }
    return date.toLocaleDateString();
  }

  handleCreate() {
    this.isSelected = true;
    this.activeData = {
      title: "Новая рассадка",
      seatingType: SEATING_TYPE.TYPED,
      seatingPlan: SEATING_PLAN.ENG,
      tableType: TABLE_TYPE.SQUARE_SMALL,
      tableSize: 0,
      sceneType: SCENE_TYPE.TOP,
      data: [],
    };
  }
  async handleDelete() {
    this.isLoading = true;
    if (!_.isNil(this.activeData?.id)) {
      await deleteConstructorData(this.activeData!);
    }
    this.userData = await this.getUserData();
    this.isSelected = false;
    this.activeData = null;
    this.isLoading = false;
  }
  async handleSave() {
    this.isLoading = true;
    if (_.isNil(this.activeData?.id)) {
      await putConstructorData(this.activeData!);
    } else {
      await postConstructorData(this.activeData!);
    }
    this.userData = await this.getUserData();
    this.isSelected = false;
    this.activeData = null;
    this.isLoading = false;
  }
  async handleRevert() {
    this.isLoading = true;
    this.userData = await this.getUserData();
    this.isSelected = false;
    this.activeData = null;
    this.isLoading = false;
  }
  handleEditOne(data: IUserData) {
    this.activeData = data;
    this.isSelected = true;
  }
  async handleDeleteOne(data: IUserData) {
    this.isLoading = true;
    if (!_.isNil(data?.id)) {
      await deleteConstructorData(data);
    }
    this.userData = await this.getUserData();
    this.isSelected = false;
    this.activeData = null;
    this.isLoading = false;
  }
}
</script>

<style scoped lang="scss">
.spinner-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .spinner-border {
    height: 50px;
    width: 50px;
  }
}
.table-action {
  padding: 0 5px;
  margin: 0 5px;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
}
</style>
