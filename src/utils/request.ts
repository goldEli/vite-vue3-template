
// 定义通用的响应类型
interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

// 定义通用的请求方法
async function request<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    // 添加默认的请求头，可以根据需要进行修改
    const defaultHeaders: HeadersInit = {
      "Content-Type": "application/json",
      // 其他头部...
    };

    // 合并默认头部和传入的头部选项
    options = {
      headers: { ...defaultHeaders, ...options?.headers },
      ...options,
    };

    const response = await fetch(url, options);

    // 检查是否成功请求 (状态码 200-299)
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // 解析 JSON 数据
    const responseData: ApiResponse<T> = await response.json();

    // 检查 API 返回的状态码是否成功
    if (responseData.code !== 0) {
      throw new Error(
        `API request failed with message: ${responseData.message}`
      );
    }

    // 返回成功时的数据
    return responseData.data;
  } catch (error) {
    // 处理异常
    console.error("API request error:", error);
    throw error;
  }
}

export default request;
