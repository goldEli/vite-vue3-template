import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// 定义通用的响应类型
interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

// 创建请求实例
const instance = axios.create({
  baseURL: "/api",
  // 指定请求超时的毫秒数
  timeout: 1000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
});

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) {
     *  config.headers.token = token
     * }
     */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.data) {
      return Promise.reject(error);
    }
    const { message } = error;
    console.error(message);
    return Promise.reject(error);
  }
);

// 定义通用的请求方法
async function request<T>(
  url: string,
  options?: AxiosRequestConfig
) {
  try {
    // 设置默认配置
    const defaultOptions: AxiosRequestConfig = {
      baseURL: "/api",
      withCredentials: false,
      // 其他配置...
    };

    // 合并默认配置和传入的配置选项
    const requestOptions: AxiosRequestConfig = {
      //   ...defaultOptions,
      ...options,
    };

    // 发送请求
    const response: AxiosResponse<ApiResponse<T>> = await instance<
      ApiResponse<T>
    >({ ...requestOptions, url });
    return response;

    // // 检查是否成功请求 (状态码 200-299)
    // if (response.status < 200 || response.status >= 300) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }

    // // 检查 API 返回的状态码是否成功
    // if (response.data.code !== 0) {
    //   throw new Error(
    //     `API request failed with message: ${response.data.message}`
    //   );
    // }

    // // 返回成功时的数据
    // return response.data.data;
  } catch (error) {
    // 处理异常
    console.error("API request error:", error);
    throw error;
  }
}

export default request;
