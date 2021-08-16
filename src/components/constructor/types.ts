export interface IUserData {
  title: string;
  createDate: string | number;
  seatingType: SEATING_TYPE;
  seatingPlan?: SEATING_PLAN;
  tableType?: TABLE_TYPE;
  tableSize: number;
  sceneType: SCENE_TYPE;
  data: ISeatingData;
}
export enum SEATING_TYPE {
  TYPED = "typed",
  FREE = "free",
}
export enum SEATING_PLAN {
  ENG = "eng",
  ITA = "ita",
  ONE_TABLE = "one_table",
  CIRCLE_TABLE = "circle_table",
  CHAR_G = "char_g",
  CHAR_P = "char_p",
  CHAR_T = "char_t",
  CHAR_W = "char_w",
  ROWS = "rows",
}
export enum TABLE_TYPE {
  CIRCLE = "circle",
  SQUARE = "square",
}
export enum SCENE_TYPE {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}
export interface ISeatingData {
  [key: string]: any;
}
