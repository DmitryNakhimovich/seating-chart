export interface IUserData {
  id?: number;
  projectId?: number;
  title: string;
  createDate?: string | number;
  seatingType: SEATING_TYPE;
  seatingPlan?: SEATING_PLAN;
  tableType?: TABLE_TYPE;
  tableSize: number;
  sceneData: ISceneData;
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
  RECT_6_VERT = "rect_6_vert",
  RECT_6_HOR = "rect_6_hor",
  RECT_12 = "rect_12",
}
export enum TABLE_SIZE {
  CIRCLE_SMALL = 8,
  CIRCLE_LARGE = 16,
  SQUARE_SMALL = 8,
  RECT_6 = 16,
  RECT_12 = 24,
}
export enum TABLE_SIDES {
  ALL = "1.1.1.1",
  NONE = "0.0.0.0",
  LEFT = "1.0.0.0",
  TOP = "0.1.0.0",
  RIGHT = "0.0.1.0",
  BOTTOM = "0.0.0.1",
  LEFT_TOP = "1.1.0.0",
  TOP_RIGHT = "0.1.1.0",
  RIGHT_BOTTOM = "0.0.1.1",
  LEFT_BOTTOM = "1.0.0.1",
  LEFT_RIGHT = "1.0.1.0",
  TOP_BOTTOM = "0.1.0.1",
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
  activeSides?: TABLE_SIDES;
  [key: string]: any;
}
export interface ISceneData {
  posX: number;
  posY: number;
  rotate: number;
  sceneType: SCENE_TYPE;
  isLocked?: boolean;
  isShow?: boolean;
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
