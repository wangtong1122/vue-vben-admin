/**
 * 什么时候用type 什么时候用interface
 * 一、用interface
 * 1、定义对象的形状：interface 最常用于定义对象的形状，它们描述了对象应该具有的属性和方法
 * 2、类的实现：interface 可以用于定义类需要实现的方法和属性。这有助于确保类符合特定的接口契约
 * 3、继承和合并：interface 支持继承和合并，您可以将多个接口组合成一个。这对于定义复杂的接口非常有用。
 * 二、使用type的情况
 * 1、合类型和交叉类型：type 可以用于定义联合类型（Union Types）和交叉类型（Intersection Types）。这些类型对于描述复杂的数据结构非常有用。
 * 2、创建类型别名：type 用于创建自定义类型别名，这有助于提高代码的可读性和可维护性
 * 3、复杂类型操作：如果您需要进行复杂的类型操作，例如条件类型（conditional types），type 提供了更大的灵活性。
 */
export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
export type SuccessMessageMode = ErrorMessageMode;

export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  formatDate?: boolean;
  // Whether to process the request result
  isTransformResponse?: boolean;
  // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers
  isReturnNativeResponse?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Success message prompt type
  successMessageMode?: SuccessMessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // Whether to send token in header
  withToken?: boolean;
  // 请求重试机制
  retryRequest?: RetryRequest;
}

export interface RetryRequest {
  isOpenRetry: boolean;
  count: number;
  waitTime: number;
}
export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}
