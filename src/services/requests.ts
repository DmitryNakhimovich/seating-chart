import * as apiClient from "./apiClient";
import { GET_CATEGORY, GET_CATEGORY_USERS } from "@/services/endpoints";

export const getGuestCategoryList = async (project: number) => {
  const res = await apiClient.get(GET_CATEGORY, { project });
  return res?.data?.map((d: any) => ({ id: d.id, name: d.label }));
};

export const getGuestsListByCategory = async (
  project: number,
  category: number
) => {
  const res = await apiClient.get(GET_CATEGORY_USERS, { project, category });
  return res?.data?.map((d: any, i: number) => ({
    id: d.id,
    name: d.name,
    userIndex: i,
  }));
};
