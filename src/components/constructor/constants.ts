import {
  ISeatingTablePosition,
  SCENE_TYPE,
  SEATING_PLAN,
  SEATING_TYPE,
  TABLE_TYPE,
} from "@/components/constructor/types";

export const ERROR_TEXT = {
  inputNotEmpty: "Поле не может быть пустым!",
  inputNumberMoreZero: "Значение поля должно быть положительным!",
};

export const SEATING_TYPE_OPTIONS = [
  {
    value: SEATING_TYPE.TYPED,
    text: "Типовой",
  },
  {
    value: SEATING_TYPE.FREE,
    text: "Свободный",
  },
];
export const SEATING_PLAN_OPTIONS = [
  {
    value: SEATING_PLAN.ENG,
    text: "Английская",
  },
  {
    value: SEATING_PLAN.ITA,
    text: "Итальянская",
  },
  {
    value: SEATING_PLAN.ONE_TABLE,
    text: "Одним столом",
  },
  {
    value: SEATING_PLAN.CIRCLE_TABLE,
    text: "Круглый стол",
  },
  {
    value: SEATING_PLAN.CHAR_G,
    text: "Буквой «Г»",
  },
  {
    value: SEATING_PLAN.CHAR_P,
    text: "Буквой «П»",
  },
  {
    value: SEATING_PLAN.CHAR_T,
    text: "Буквой «Т»",
  },
  {
    value: SEATING_PLAN.CHAR_W,
    text: "Буквой «Ш»",
  },
  {
    value: SEATING_PLAN.ROWS,
    text: "Ряды",
  },
];
export const SCENE_TYPE_OPTIONS = [
  {
    value: SCENE_TYPE.TOP,
    text: "Сверху",
  },
  {
    value: SCENE_TYPE.RIGHT,
    text: "Справа",
  },
  {
    value: SCENE_TYPE.BOTTOM,
    text: "Снизу",
  },
  {
    value: SCENE_TYPE.LEFT,
    text: "Слева",
  },
];

export const SEATING_TABLE_POSITION: ISeatingTablePosition = {};
SEATING_TABLE_POSITION[SEATING_PLAN.ENG] = [
  { tableIndex: 0, posX: 0, posY: 0, tableType: TABLE_TYPE.SQUARE_SMALL },
  { tableIndex: 1, posX: 300, posY: 0, tableType: TABLE_TYPE.SQUARE_SMALL },
  { tableIndex: 2, posX: 150, posY: 150, tableType: TABLE_TYPE.SQUARE_SMALL },
];
