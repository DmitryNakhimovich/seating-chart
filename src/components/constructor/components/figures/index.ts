import { TABLE_TYPE } from "@/components/constructor/types";
import { Vue } from "vue-class-component";
import TableCircleSmall from "@/components/constructor/components/figures/TableCircleSmall.vue";

const figures: { [key: string]: Vue<any> } = {};
figures[TABLE_TYPE.CIRCLE_SMALL] = TableCircleSmall;
figures[TABLE_TYPE.SQUARE_SMALL] = TableCircleSmall;

export default figures;
