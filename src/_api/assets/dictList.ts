/** --修改类 */
export interface DictUpdatePayload {
  /** 字典id  --必填 */
  id: number;
  /** 数据编码 */
  code?: string;
  /** 数据名称 */
  name?: string;
  /** 前缀 */
  prefix?: string;
  /** 父类id */
  parentId?: number;
  /** 预计使用期数 */
  expectedPeriods?: number;
  /** 数据配置信息 */
  configJson?: string;
}

/** DTO */
export interface DictDeletePayload {
  ids: number[];
}

export interface DictCreatePayload {
  /** 字典类别 （0：资产  1：区域 2：所属公司） */
  type: number;
  /** 数据编码（分类编码） */
  code: string;
  /** 数据名称（分类名称） */
  name: string;
  /** 前缀 */
  prefix?: string;
  /** 分类额外信息 */
  configJson?: string;
  /** 上级id */
  parentId?: number;
  /** 预计使用期数 */
  expectedPeriods?: number;
}

export interface DictListParams {
  pageNumber?: string;
  pageSize?: string;
  /** 字典类型 type --字典类型 分类=0  区域=1  2=所属公司 */
  type?: string;
  /** 数据编码 */
  code?: string;
  /** 数据名称 */
  name?: string;
}

type RequestParams = any;

/**
 * No description
 *
 * @tags 字典控制类
 * @name DictUpdate
 * @summary 修改字典信息
 * @request PUT:/dict
 */
export const dictUpdate = (root: DictUpdatePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: object;
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/dict`,
    method: "PUT",
    data: root,
    ...params,
  });
export type DictUpdateP = DictUpdatePayload;

export type DictUpdateR = GetData<{
  code?: number;
  msg?: string;
  data?: object;
  traceId?: string;
}>;

/**
 * No description
 *
 * @tags 字典控制类
 * @name DictDelete
 * @summary 删除
 * @request DELETE:/dict
 */
export const dictDelete = (root: DictDeletePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: object;
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/dict`,
    method: "DELETE",
    data: root,
    ...params,
  });
export type DictDeleteP = DictDeletePayload;

export type DictDeleteR = GetData<{
  code?: number;
  msg?: string;
  data?: object;
  traceId?: string;
}>;

/**
 * No description
 *
 * @tags 字典控制类
 * @name DictCreate
 * @summary 新增字典数码
 * @request POST:/dict
 */
export const dictCreate = (root: DictCreatePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: object;
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/dict`,
    method: "POST",
    data: root,
    ...params,
  });
export type DictCreateP = DictCreatePayload;

export type DictCreateR = GetData<{
  code?: number;
  msg?: string;
  data?: object;
  traceId?: string;
}>;

/**
 * No description
 *
 * @tags 字典控制类
 * @name DictList
 * @summary 查询指定类型字典数据
 * @request GET:/dict
 */
export const dictList = (query: DictListParams, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: {
        list?: {
          /** 字典数据id */
          id?: number;
          /** 数据编码 */
          code?: string;
          /** 数据名称 */
          name?: string;
          /** 前缀 */
          prefix?: string;
          /** 父类id */
          parentId?: number;
          /** 预计使用期数 */
          expectedPeriods?: number;
          /** 数据配置信息 */
          configJson?: {
            /** 配置/地点id */
            id?: number;
            /** 配置/地点名称 */
            key?: string;
          }[];
          /** 子集 */
          children?: {
            /** 字典数据id */
            id?: number;
            /** 数据编码 */
            code?: string;
            /** 数据名称 */
            name?: string;
            /** 前缀 */
            prefix?: string;
            /** 父类id */
            parentId?: number;
            /** 预计使用期数 */
            expectedPeriods?: number;
            /** 数据配置信息 */
            configJson?: {
              /** 配置/地点id */
              id?: number;
              /** 配置/地点名称 */
              key?: string;
            }[];
            /** 子集 */
            children?: object[];
          }[];
        }[];
        pageNation?: {
          pageNumber?: number;
          pageSize?: number;
          totalPages?: number;
          totalRecords?: number;
        };
      };
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/dict`,
    method: "GET",
    data: query,
    ...params,
  });
export type DictListP = DictListParams;

export type DictListR = GetData<{
  code?: number;
  msg?: string;
  data?: {
    list?: {
      /** 字典数据id */
      id?: number;
      /** 数据编码 */
      code?: string;
      /** 数据名称 */
      name?: string;
      /** 前缀 */
      prefix?: string;
      /** 父类id */
      parentId?: number;
      /** 预计使用期数 */
      expectedPeriods?: number;
      /** 数据配置信息 */
      configJson?: {
        /** 配置/地点id */
        id?: number;
        /** 配置/地点名称 */
        key?: string;
      }[];
      /** 子集 */
      children?: {
        /** 字典数据id */
        id?: number;
        /** 数据编码 */
        code?: string;
        /** 数据名称 */
        name?: string;
        /** 前缀 */
        prefix?: string;
        /** 父类id */
        parentId?: number;
        /** 预计使用期数 */
        expectedPeriods?: number;
        /** 数据配置信息 */
        configJson?: {
          /** 配置/地点id */
          id?: number;
          /** 配置/地点名称 */
          key?: string;
        }[];
        /** 子集 */
        children?: object[];
      }[];
    }[];
    pageNation?: {
      pageNumber?: number;
      pageSize?: number;
      totalPages?: number;
      totalRecords?: number;
    };
  };
  traceId?: string;
}>;
