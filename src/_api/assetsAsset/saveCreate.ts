export interface SaveCreatePayload {
  /** 资产名称 */
  name: string;
  /** 规格型号 */
  mode?: string;
  /** sn号 */
  sn?: string;
  /** 计量单位 */
  unit?: string;
  /** 来源(1=购入，2=接收) */
  source: number;
  /** 购入日期 */
  purchaseTime: string;
  /** 资产状态(0=闲置，1=在用  2=维修 3=报废 4=借用 5=盘亏 6=待报废  7=公用)状态变更同时记录状态履历表 */
  state?: number;
  /** 资产类别(下拉框) */
  categoryId: number;
  /** 金额 */
  price?: number;
  /** 所属公司 */
  beCompanyId: number;
  /** 区域id */
  areaId: number;
  /** 存放地点 */
  address: string;
  /** 管理员id */
  adminId?: number;
  /** 期数(月) */
  periods: number;
  /** 资产照片 前端oss上传 (json string数组)[{"name":"","url":""}，{"name":"","url":""}] */
  assetPhoto?: {
    name?: string;
    url?: string;
  }[];
  /** 备注 */
  remark?: string;
  /** 分类配置 根据分类切换 [{"id","key":"cpu","value":""},{"id":"","key":"内存","value":""}] */
  configJson?: {
    id?: number;
    key?: string;
    value?: string;
  }[];
  /** 评估金额 */
  assessPrice?: number;
  /** 评估时间 */
  assessTime?: string;
  /** 使用人id */
  userId?: number;
  /** 使用公司 借用归还时跟userId的公司不一样 */
  userCompanyId?: number;
  /** 使用部门 */
  userDeptId?: number;
  /** 领用时间 */
  receiveTime?: string;
  /** 供应商 */
  supplier?: string;
  /** 借用人公司。借用状态时 手动输入的公司 */
  inputCompanyName?: string;
}

type RequestParams = any;

/**
 * No description
 *
 * @tags 资产管理
 * @name SaveCreate
 * @summary 新建入库
 * @request POST:/asset/save
 */
export const saveCreate = (root: SaveCreatePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: string;
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/asset/save`,
    method: "POST",
    data: root,
    ...params,
  });
export type SaveCreateP = SaveCreatePayload;

export type SaveCreateR = GetData<{
  code?: number;
  msg?: string;
  data?: string;
  traceId?: string;
}>;
