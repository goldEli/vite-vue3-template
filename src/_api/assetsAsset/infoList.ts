export interface InfoListParams {
  assetCode: string;
}

type RequestParams = any;

/**
 * No description
 *
 * @tags 资产管理
 * @name InfoList
 * @summary 资产详情
 * @request GET:/asset/info
 */
export const infoList = (query: InfoListParams, params: RequestParams = {}) =>
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
        /** 评估记录 */
        assetsAssessRecord?: {
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
          /** 资产编码 */
          assetCode?: string;
          /** 评估id */
          assessId?: number;
          /** 评估金额 */
          assessPrice?: number;
        }[];
        /** 拆机记录 */
        assetsUnpackRecord?: {
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
          unpackId?: number;
          /** 所属资产编码 */
          assetCode?: string;
          /** 备注 */
          remark?: string;
          /** 关联资产编码;(转移给谁) */
          relationAssetCode?: string;
          /** 资产名称 */
          name?: string;
        }[];
        /** 评估金额 */
        assessPrice?: number;
        /** 评估时间 */
        assessTime?: string;
      };
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/asset/info`,
    method: "GET",
    data: query,
    ...params,
  });
export type InfoListP = InfoListParams;

export type InfoListR = GetData<{
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
    /** 评估记录 */
    assetsAssessRecord?: {
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
      /** 资产编码 */
      assetCode?: string;
      /** 评估id */
      assessId?: number;
      /** 评估金额 */
      assessPrice?: number;
    }[];
    /** 拆机记录 */
    assetsUnpackRecord?: {
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
      unpackId?: number;
      /** 所属资产编码 */
      assetCode?: string;
      /** 备注 */
      remark?: string;
      /** 关联资产编码;(转移给谁) */
      relationAssetCode?: string;
      /** 资产名称 */
      name?: string;
    }[];
    /** 评估金额 */
    assessPrice?: number;
    /** 评估时间 */
    assessTime?: string;
  };
  traceId?: string;
}>;
