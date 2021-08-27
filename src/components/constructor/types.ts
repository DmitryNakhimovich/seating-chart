export interface IUserData {
  id?: number;
  projectId?: number;
  title: string;
  createDate?: string | number;
  seatingType: SEATING_TYPE;
  seatingPlan?: SEATING_PLAN;
  tableType?: TABLE_TYPE;
  tableSize: number;
  sceneType: SCENE_TYPE;
  data: ISeatingData[];
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
  CIRCLE_SMALL = "circle_small",
  CIRCLE_LARGE = "circle_large",
  SQUARE_SMALL = "square_small",
  RECT_5 = "react_5",
  RECT_8 = "react_8",
  RECT_12 = "react_12",
}
export enum TABLE_SIZE {
  CIRCLE_SMALL = 8,
  CIRCLE_LARGE = 16,
  SQUARE_SMALL = 8,
  RECT_5 = 14,
  RECT_8 = 20,
  RECT_12 = 28,
}
export enum SCENE_TYPE {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
  NONE = "none",
}
export interface ISeatingData {
  posX: number;
  posY: number;
  tableIndex: number;
  seatsSize: number;
  tableType: TABLE_TYPE;
  isLocked?: boolean;
  users?: IUser[];
  [key: string]: any;
}
export interface IUser {
  name: string | number;
  id: number | string;
  userIndex: number;
  isLocked?: boolean;
  isEmpty?: boolean;
  [key: string]: any;
}
export interface ISeatingTablePosition {
  [key: string]: ISeatingData[];
}
