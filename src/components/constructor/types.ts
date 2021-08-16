export interface IUserData {
  title: string;
  createDate: string;
  seatingType: ISeatingType;
  seatingPlan?: ISeatingPlan;
  tableType?: ITableType;
  tableSize?: number;
  sceneType: ISceneType;
  data: ISeatingData;
}
export type ISeatingType = "typed" | "free";
export type ISeatingPlan = "eng" | "ita";
export type ITableType = "circle" | "square";
export type ISceneType = "top" | "right";
export interface ISeatingData {
  [key: string]: any;
}
