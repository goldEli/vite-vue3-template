export interface CompanyExcelCreatePayload {
  /** @format binary */
  file: File;
}

type RequestParams = any;

/**
 * No description
 *
 * @tags 资产管理
 * @name CompanyExcelCreate
 * @summary 公司原有资产导入
 * @request POST:/asset/companyExcel
 */
export const companyExcelCreate = (data: CompanyExcelCreatePayload, params: RequestParams = {}) =>
  window.requestMethod<
    {
      code?: number;
      msg?: string;
      data?: boolean;
      traceId?: string;
    },
    any
  >({
    url: `/api/assets/asset/companyExcel`,
    method: "POST",
    data: data,
    ...params,
  });
export type CompanyExcelCreateP = CompanyExcelCreatePayload;

export type CompanyExcelCreateR = GetData<{
  code?: number;
  msg?: string;
  data?: boolean;
  traceId?: string;
}>;
