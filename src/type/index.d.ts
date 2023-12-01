declare type GetData<T> = T extends { data?: unknown } ? T['data'] : null
declare interface Window {
  requestMethod<T, U>(options: Options, noError?: boolean): Promise<T>;
  AMap: any;
}
