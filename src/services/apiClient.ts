import axios from "axios";

const commonHeaders: { [key: string]: any } = {};

const instance = axios.create({
  withCredentials: true,
  headers: commonHeaders,
});

instance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err.response.data);
  }
);

export const setHeader = (key: string, value: any) => {
  commonHeaders[key] = value;
};
const setToken = (url: string) =>
  `${url}?${new URLSearchParams({
    token: localStorage.getItem("token") ?? "",
  })}`;

export const get = async (
  url: string,
  params?: any,
  specificHeaders?: any,
  config?: any
) => {
  const response = await instance({
    method: "GET",
    url: setToken(url),
    headers: {
      ...commonHeaders,
      ...specificHeaders,
    },
    params,
    ...config,
  });

  return response.data;
};

export const post = async (
  url: string,
  data?: any,
  params?: any,
  specificHeaders?: any,
  config?: any
) => {
  const response = await instance({
    method: "POST",
    url: setToken(url),
    headers: {
      ...commonHeaders,
      ...specificHeaders,
    },
    params,
    data,
    ...config,
  });

  return response.data;
};

export const put = async (
  url: string,
  data?: any,
  params?: any,
  specificHeaders?: any,
  config?: any
) => {
  const response = await instance({
    method: "PUT",
    url: setToken(url),
    headers: {
      ...commonHeaders,
      ...specificHeaders,
    },
    params,
    data,
    ...config,
  });

  return response.data;
};

export const patch = async (
  url: string,
  data?: any,
  params?: any,
  specificHeaders?: any,
  config?: any
) => {
  const response = await instance({
    method: "PATCH",
    url: setToken(url),
    headers: {
      ...commonHeaders,
      ...specificHeaders,
    },
    params,
    data,
    ...config,
  });
  return response.data;
};

export const apiDelete = async (
  url: string,
  data?: any,
  params?: any,
  specificHeaders?: any,
  config?: any
) => {
  const response = await instance({
    method: "DELETE",
    url: setToken(url),
    headers: {
      ...commonHeaders,
      ...specificHeaders,
    },
    params,
    data,
    ...config,
  });
  return response.data;
};

setHeader("Time-Zone", Intl.DateTimeFormat().resolvedOptions().timeZone);
setHeader("Content-Type", "application/json");

export default instance;
