import * as apiClient from "./apiClient";
import {
  DELETE_CONSTRUCTOR,
  GET_CATEGORY,
  GET_CATEGORY_USERS,
  GET_CONSTRUCTOR,
  POST_CONSTRUCTOR,
  PUT_CONSTRUCTOR,
} from "@/services/endpoints";
import { IUserData } from "@/components/constructor/types";
import _ from "lodash";

const project = window.GlobalConfig?.project?.id ?? 24;

export const getGuestCategoryList = async () => {
  const res = await apiClient.get(GET_CATEGORY, {
    project,
  });
  return [
    {
      id: -1,
      name: "без категории",
    },
  ].concat(res?.data?.map((d: any) => ({ id: d.id, name: d.label })));
};
export const getGuestsListByCategory = async (category: number) => {
  const res = await apiClient.get(GET_CATEGORY_USERS, {
    project,
    category,
  });
  return (
    res?.data?.map((d: any, i: number) => ({
      id: d.id,
      name: d.name,
      userIndex: i,
    })) ?? []
  );
};

export const getConstructorDataList = async () => {
  const res = await apiClient.get(GET_CONSTRUCTOR, { project });
  if (_.isNil(res?.data) || res?.status === "error") {
    throw new Error(res?.message || "No data returned for request!");
  }
  return res?.data?.map((d: any) => ({
    ...d.data,
    id: parseInt(d.id),
    projectId: parseInt(d.project_id),
    title: d.title,
    createDate: d.created_at,
  }));
};
export const putConstructorData = async (data: IUserData) => {
  const userData = {
    title: data.title,
    project: data.projectId || project,
    data,
  };
  const res = await apiClient.put(PUT_CONSTRUCTOR, userData);
  if (res?.status === "error") {
    throw new Error(res?.message || "No data returned for request!");
  }
  return res;
};
export const postConstructorData = async (data: IUserData) => {
  const userData = {
    id: data.id,
    title: data.title,
    project: data.projectId || project,
    data,
  };
  const res = await apiClient.post(POST_CONSTRUCTOR, userData);
  if (res?.status === "error") {
    throw new Error(res?.message || "No data returned for request!");
  }
  return res;
};
export const deleteConstructorData = async (data: IUserData) => {
  const userData = {
    id: data.id,
    project: data.projectId || project,
  };
  const res = await apiClient.apiDelete(DELETE_CONSTRUCTOR, null, userData);
  if (res?.status === "error") {
    throw new Error(res?.message || "No data returned for request!");
  }
  return res;
};
