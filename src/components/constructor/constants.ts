import {
  ISeatingData,
  ISeatingTablePosition,
  SCENE_TYPE,
  SEATING_PLAN,
  SEATING_TYPE,
  TABLE_SIZE,
  TABLE_TYPE,
} from "@/components/constructor/types";

export const ERROR_TEXT = {
  inputNotEmpty: "Поле не может быть пустым!",
  inputNumberMoreZero: "Значение поля должно быть положительным!",
};

export const MAX_TABLES = 30;
export const MIN_TABLES = 0;

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
  // {
  //   value: SCENE_TYPE.BOTTOM,
  //   text: "Снизу",
  // },
  {
    value: SCENE_TYPE.LEFT,
    text: "Слева",
  },
  {
    value: SCENE_TYPE.NONE,
    text: "Отсутствует",
  },
];
export const TABLE_TYPE_OPTIONS = [
  {
    value: TABLE_TYPE.SQUARE_SMALL,
    text: "Квадратный малый стол",
  },
  {
    value: TABLE_TYPE.CIRCLE_SMALL,
    text: "Круглый малый стол",
  },
  {
    value: TABLE_TYPE.CIRCLE_LARGE,
    text: "Круглый большой стол",
  },
  {
    value: TABLE_TYPE.RECT_5,
    text: "Прямоугольный малый стол",
  },
  {
    value: TABLE_TYPE.RECT_8,
    text: "Прямоугольный средний стол",
  },
  {
    value: TABLE_TYPE.RECT_12,
    text: "Прямоугольный большой стол",
  },
];

export const SEATING_TABLE_POSITION: ISeatingTablePosition = {};
SEATING_TABLE_POSITION[SEATING_PLAN.ENG] = [
  {
    tableIndex: 0,
    posX: 100,
    posY: 80,
    tableType: TABLE_TYPE.SQUARE_SMALL,
    seatsSize: TABLE_SIZE.SQUARE_SMALL,
  },
  {
    tableIndex: 1,
    posX: 820,
    posY: 80,
    tableType: TABLE_TYPE.SQUARE_SMALL,
    seatsSize: TABLE_SIZE.SQUARE_SMALL,
  },
  {
    tableIndex: 2,
    posX: 460,
    posY: 240,
    tableType: TABLE_TYPE.SQUARE_SMALL,
    seatsSize: TABLE_SIZE.SQUARE_SMALL,
  },
];
Array(9)
  .fill(null)
  .forEach((v: any, i: number) => {
    SEATING_TABLE_POSITION[SEATING_PLAN.ENG].push(
      {
        tableIndex: (i + 1) * 3,
        posX: 100,
        posY: 80 + 320 * (i + 1),
        tableType: TABLE_TYPE.SQUARE_SMALL,
        seatsSize: TABLE_SIZE.SQUARE_SMALL,
      },
      {
        tableIndex: (i + 1) * 3 + 1,
        posX: 820,
        posY: 80 + 320 * (i + 1),
        tableType: TABLE_TYPE.SQUARE_SMALL,
        seatsSize: TABLE_SIZE.SQUARE_SMALL,
      },
      {
        tableIndex: (i + 1) * 3 + 2,
        posX: 460,
        posY: 240 + 320 * (i + 1),
        tableType: TABLE_TYPE.SQUARE_SMALL,
        seatsSize: TABLE_SIZE.SQUARE_SMALL,
      }
    );
  });
SEATING_TABLE_POSITION[SEATING_PLAN.ENG].splice(30, 99);
SEATING_TABLE_POSITION[SEATING_PLAN.ITA] = [
  {
    tableIndex: 0,
    posX: 100,
    posY: 80,
    tableType: TABLE_TYPE.CIRCLE_SMALL,
    seatsSize: TABLE_SIZE.CIRCLE_SMALL,
  },
  {
    tableIndex: 1,
    posX: 820,
    posY: 80,
    tableType: TABLE_TYPE.CIRCLE_SMALL,
    seatsSize: TABLE_SIZE.CIRCLE_SMALL,
  },
  {
    tableIndex: 2,
    posX: 330,
    posY: 280,
    tableType: TABLE_TYPE.CIRCLE_SMALL,
    seatsSize: TABLE_SIZE.CIRCLE_SMALL,
  },
  {
    tableIndex: 3,
    posX: 580,
    posY: 280,
    tableType: TABLE_TYPE.CIRCLE_SMALL,
    seatsSize: TABLE_SIZE.CIRCLE_SMALL,
  },
];
Array(9)
  .fill(null)
  .forEach((v: any, i: number) => {
    SEATING_TABLE_POSITION[SEATING_PLAN.ITA].push(
      {
        tableIndex: (i + 1) * 4,
        posX: 100,
        posY: 80 + 360 * (i + 1),
        tableType: TABLE_TYPE.CIRCLE_SMALL,
        seatsSize: TABLE_SIZE.CIRCLE_SMALL,
      },
      {
        tableIndex: (i + 1) * 4 + 1,
        posX: 820,
        posY: 80 + 360 * (i + 1),
        tableType: TABLE_TYPE.CIRCLE_SMALL,
        seatsSize: TABLE_SIZE.CIRCLE_SMALL,
      },
      {
        tableIndex: (i + 1) * 4 + 2,
        posX: 330,
        posY: 280 + 360 * (i + 1),
        tableType: TABLE_TYPE.CIRCLE_SMALL,
        seatsSize: TABLE_SIZE.CIRCLE_SMALL,
      },
      {
        tableIndex: (i + 1) * 4 + 3,
        posX: 580,
        posY: 280 + 360 * (i + 1),
        tableType: TABLE_TYPE.CIRCLE_SMALL,
        seatsSize: TABLE_SIZE.CIRCLE_SMALL,
      }
    );
  });
SEATING_TABLE_POSITION[SEATING_PLAN.ITA].splice(30, 99);
SEATING_TABLE_POSITION[SEATING_PLAN.ONE_TABLE] = [
  {
    tableIndex: 0,
    posX: 460,
    posY: 120,
    tableType: TABLE_TYPE.RECT_12,
    seatsSize: TABLE_SIZE.RECT_12,
  },
];
SEATING_TABLE_POSITION[SEATING_PLAN.CIRCLE_TABLE] = [
  {
    tableIndex: 0,
    posX: 460,
    posY: 240,
    tableType: TABLE_TYPE.CIRCLE_LARGE,
    seatsSize: TABLE_SIZE.CIRCLE_LARGE,
  },
];

export const SEATING_TABLE_FREE: {
  [key: string]: ISeatingData;
} = {};
SEATING_TABLE_FREE[TABLE_TYPE.SQUARE_SMALL] = {
  tableIndex: 0,
  posX: 0,
  posY: 0,
  tableType: TABLE_TYPE.SQUARE_SMALL,
  seatsSize: TABLE_SIZE.SQUARE_SMALL,
};
SEATING_TABLE_FREE[TABLE_TYPE.CIRCLE_SMALL] = {
  tableIndex: 0,
  posX: 0,
  posY: 0,
  tableType: TABLE_TYPE.CIRCLE_SMALL,
  seatsSize: TABLE_SIZE.CIRCLE_SMALL,
};
SEATING_TABLE_FREE[TABLE_TYPE.CIRCLE_LARGE] = {
  tableIndex: 0,
  posX: 0,
  posY: 0,
  tableType: TABLE_TYPE.CIRCLE_LARGE,
  seatsSize: TABLE_SIZE.CIRCLE_LARGE,
};
SEATING_TABLE_FREE[TABLE_TYPE.RECT_5] = {
  tableIndex: 0,
  posX: 0,
  posY: 0,
  tableType: TABLE_TYPE.RECT_5,
  seatsSize: TABLE_SIZE.RECT_5,
};
SEATING_TABLE_FREE[TABLE_TYPE.RECT_8] = {
  tableIndex: 0,
  posX: 0,
  posY: 0,
  tableType: TABLE_TYPE.RECT_8,
  seatsSize: TABLE_SIZE.RECT_8,
};
SEATING_TABLE_FREE[TABLE_TYPE.RECT_12] = {
  tableIndex: 0,
  posX: 0,
  posY: 0,
  tableType: TABLE_TYPE.RECT_12,
  seatsSize: TABLE_SIZE.RECT_12,
};
