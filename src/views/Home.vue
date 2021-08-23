<template>
  <div v-if="isLoading" class="spinner-border text-primary">
    <span class="visually-hidden">Loading...</span>
  </div>

  <seating-constructor v-if="isLoaded" :user-data="activeData" />
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
  isLoaded = false;

  async beforeMount() {
    //test
    await fetch("https://jsonplaceholder.typicode.com/posts");
    this.isLoading = false;
    this.isLoaded = true;
    this.activeData = {
      title: "Новая рассадка",
      createDate: new Date().getTime(),
      seatingType: SEATING_TYPE.TYPED,
      seatingPlan: SEATING_PLAN.ENG,
      tableSize: 2,
      sceneType: SCENE_TYPE.TOP,
      data: [
        {
          posX: 20,
          posY: 20,
          tableIndex: 0,
          isLocked: false,
          users: [],
          seatsSize: 8,
          tableType: TABLE_TYPE.CIRCLE_SMALL,
        },
        {
          posX: 220,
          posY: 220,
          tableIndex: 1,
          isLocked: false,
          users: [],
          seatsSize: 8,
          tableType: TABLE_TYPE.CIRCLE_SMALL,
        },
      ],
    };
  }
}
</script>
