export interface SimpleListCreatePayload {
  /** 关键字搜索字段 */
  keyword?: string;
  /** 资产code */
  assetCode?: string[];
  /** 资产类别(下拉框) */
  categoryId?: number;
  /** 库存状态(0=在库,1=出库) */
  stockState?: number;
  /** 资产状态(0=闲置，1=在用  2=维修 3=报废 4=借用 5=盘亏 6=待报废  7=公用) */
  state?: number;
  /**
   * 多字段动态排序集合
   * @default "new ArrayList<>()"
   */
  orders?: {
    /** 需要排序的字段 驼峰 例如 createdTime */
    property?: string;
    /** 是否正序 */
    asc?: boolean;
  }[];
}

type RequestParams = any;

/**
 * @description 分页未使用。排序可使用 keyword 根据资产编码或者名称模糊搜索
 *
 * @tags 资产管理
 * @name SimpleListCreate
 * @summary 简单的资产列表
 * @request POST:/asset/simpleList
 */
export const simpleListCreate = (root: SimpleListCreatePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: {
        /** 租户信息 */
        companyId?: number;
        /** 创建人 */
        createdId?: number;
        /** 创建人名字 */
        createdName?: string;
        /** 创建时间 */
        createdTime?: string;
        /** 更新人id */
        updatedId?: number;
        /** 更新人名称 */
        updatedName?: string;
        /** 更新时间 */
        updatedTime?: string;
        /** 删除标识(0=正常，1=删除) */
        isDeleted?: boolean;
        /** 资产编号 */
        assetCode?: string;
        /** 资产名称 */
        name?: string;
        /** 规格型号 */
        mode?: string;
        /** sn号 */
        sn?: string;
        /** 计量单位 */
        unit?: string;
        /** 来源(下拉框) */
        source?: number;
        /** 购入日期 */
        purchaseTime?: string;
        /** 供应商 */
        supplier?: string;
        /** 资产状态(0=闲置，1=在用  2=维修 3=报废 4=借用 5=盘亏 6=待报废  7=公用)状态变更同时记录状态履历表 */
        state?: number;
        /** 库存状态(0=在库,1=出库) */
        stockState?: number;
        /** 资产类别(下拉框) */
        categoryId?: number;
        /** 金额 */
        price?: number;
        /** 区域id */
        areaId?: number;
        /** 存放地点 */
        address?: string;
        /** 管理员id */
        adminId?: string;
        /** 管理员名称 */
        adminName?: string;
        /** 期数(月) */
        periods?: number;
        /** 期末开始时间 */
        periodStartTime?: string;
        /** 期末结束时间 */
        periodEndTime?: string;
        depreciationPrice?: number;
        /** 残值 */
        residualPrice?: number;
        /** 期末价格 */
        expirePrice?: number;
        /** 资产照片(json数组) */
        assetPhoto?: {
          name?: string;
          url?: string;
        }[];
        /** 备注 */
        remark?: string;
        /** 配置信息 */
        configJson?: {
          id?: number;
          key?: string;
          value?: string;
        }[];
        /** 所属公司 */
        beCompanyId?: number;
        /** 使用人 */
        userId?: number;
        userInfo?: {
          /** 用户id */
          id?: number;
          /** 名称 */
          name?: string;
          /** 公司id */
          companyId?: number;
          /** 公司名称 */
          companyName?: string;
          /** 头像 */
          avatar?: string;
          /** 部门名称 */
          departmentName?: string;
          /** 部门id */
          departmentId?: number;
        };
        userCompanyId?: number;
        /** 使用部门 */
        userDeptId?: number;
        /** 领取时间 */
        receiveTime?: string;
        /** 借用归还输入公司 */
        inputCompanyName?: string;
        /** 最近的一条业务单 可以根据状态跳转对应页面 */
        businessCode?: string;
      }[];
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/asset/simpleList`,
    method: "POST",
    data: root,
    ...params,
  });
export type SimpleListCreateP = SimpleListCreatePayload;

export type SimpleListCreateR = GetData<{
  code?: number;
  msg?: string;
  data?: {
    /** 租户信息 */
    companyId?: number;
    /** 创建人 */
    createdId?: number;
    /** 创建人名字 */
    createdName?: string;
    /** 创建时间 */
    createdTime?: string;
    /** 更新人id */
    updatedId?: number;
    /** 更新人名称 */
    updatedName?: string;
    /** 更新时间 */
    updatedTime?: string;
    /** 删除标识(0=正常，1=删除) */
    isDeleted?: boolean;
    /** 资产编号 */
    assetCode?: string;
    /** 资产名称 */
    name?: string;
    /** 规格型号 */
    mode?: string;
    /** sn号 */
    sn?: string;
    /** 计量单位 */
    unit?: string;
    /** 来源(下拉框) */
    source?: number;
    /** 购入日期 */
    purchaseTime?: string;
    /** 供应商 */
    supplier?: string;
    /** 资产状态(0=闲置，1=在用  2=维修 3=报废 4=借用 5=盘亏 6=待报废  7=公用)状态变更同时记录状态履历表 */
    state?: number;
    /** 库存状态(0=在库,1=出库) */
    stockState?: number;
    /** 资产类别(下拉框) */
    categoryId?: number;
    /** 金额 */
    price?: number;
    /** 区域id */
    areaId?: number;
    /** 存放地点 */
    address?: string;
    /** 管理员id */
    adminId?: string;
    /** 管理员名称 */
    adminName?: string;
    /** 期数(月) */
    periods?: number;
    /** 期末开始时间 */
    periodStartTime?: string;
    /** 期末结束时间 */
    periodEndTime?: string;
    depreciationPrice?: number;
    /** 残值 */
    residualPrice?: number;
    /** 期末价格 */
    expirePrice?: number;
    /** 资产照片(json数组) */
    assetPhoto?: {
      name?: string;
      url?: string;
    }[];
    /** 备注 */
    remark?: string;
    /** 配置信息 */
    configJson?: {
      id?: number;
      key?: string;
      value?: string;
    }[];
    /** 所属公司 */
    beCompanyId?: number;
    /** 使用人 */
    userId?: number;
    userInfo?: {
      /** 用户id */
      id?: number;
      /** 名称 */
      name?: string;
      /** 公司id */
      companyId?: number;
      /** 公司名称 */
      companyName?: string;
      /** 头像 */
      avatar?: string;
      /** 部门名称 */
      departmentName?: string;
      /** 部门id */
      departmentId?: number;
    };
    userCompanyId?: number;
    /** 使用部门 */
    userDeptId?: number;
    /** 领取时间 */
    receiveTime?: string;
    /** 借用归还输入公司 */
    inputCompanyName?: string;
    /** 最近的一条业务单 可以根据状态跳转对应页面 */
    businessCode?: string;
  }[];
  traceId?: string;
}>;
