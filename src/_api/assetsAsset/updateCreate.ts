export interface UpdateCreatePayload {
  /** 资源id */
  assetCode: string;
  /** 规格型号 */
  mode?: string;
  /** sn号 */
  sn?: string;
  /** 计量单位 */
  unit?: string;
  /** 购入日期 */
  purchaseTime?: string;
  /** 供应商 */
  supplier?: string;
  /** 金额 */
  price?: number;
  /** 所属公司 */
  beCompanyId: number;
  /** 区域id */
  areaId: number;
  /** 存放地点 */
  address: string;
  /** 管理员id */
  adminId?: string;
  /** 期数(月) */
  periods?: number;
  /** 资产照片(json string 数组 [{"name":"","url":""}，{"name":"","url":""}]) */
  assetPhoto?: object[];
  /** 备注 */
  remark?: string;
}

type RequestParams = any;

/**
 * No description
 *
 * @tags 资产管理
 * @name UpdateCreate
 * @summary 编辑
 * @request POST:/asset/update
 */
export const updateCreate = (root: UpdateCreatePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: boolean;
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/asset/update`,
    method: "POST",
    data: root,
    ...params,
  });
export type UpdateCreateP = UpdateCreatePayload;

export type UpdateCreateR = GetData<{
  code?: number;
  msg?: string;
  data?: boolean;
  traceId?: string;
}>;
