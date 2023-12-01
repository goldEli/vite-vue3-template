/** 资产编码数组 */
export type RemoveCreatePayload = string[];

type RequestParams = any;

/**
 * No description
 *
 * @tags 资产管理
 * @name RemoveCreate
 * @summary 移除
 * @request POST:/asset/remove
 */
export const removeCreate = (root: RemoveCreatePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: boolean;
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/asset/remove`,
    method: "POST",
    data: root,
    ...params,
  });
export type RemoveCreateP = RemoveCreatePayload;

export type RemoveCreateR = GetData<{
  code?: number;
  msg?: string;
  data?: boolean;
  traceId?: string;
}>;
