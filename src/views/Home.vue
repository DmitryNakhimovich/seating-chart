<template>
  <seating-constructor :user-data="activeData" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SeatingConstructor from "@/components/constructor/SeatingConstructor.vue";
import {
  IUserData,
  SCENE_TYPE,
  SEATING_PLAN,
  SEATING_TYPE,
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

  beforeMount() {
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
        },
        {
          posX: 220,
          posY: 220,
          tableIndex: 1,
          isLocked: false,
          users: [],
          seatsSize: 8,
        },
      ],
    };
  }
}
</script>
