import request from "./request";

// interface Options {
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE'
//   url: string
//   data: any
//   params?: any
// }

const requestMethod = <T>(options: any) => {
  const { method, data, ...other } = options;

  if (method === "GET") {
    other["params"] = data;
  }
  return request<T>({ ...other, method }) as Promise<T>;
};

window.requestMethod = requestMethod;
