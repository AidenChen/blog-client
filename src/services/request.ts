import type { FetchOptions, FetchContext } from 'ofetch';
import { hash } from 'ohash';

// FetchResponse<T> extends Response extends Body
interface FetchResponse<T> {
  url: string;
  status: number;
  type: string;
  statusText?: string;
  headers?: object;
  ok?: boolean;
  redirected?: boolean;
  _data?: T;
  body?: any;
  bodyUsed?: boolean;
}

interface ResponseData<T> {
  code: number;
  message: string;
  data: T | T[];
}

const requestFailed = (response: FetchResponse<any> | undefined) => {
  if (!response) {
    return [true, '网络不佳,请刷新后重试'];
  }

  const { code, message } = response._data;
  if (code !== 200) {
    return [true, message];
  }

  return [false];
};

const request = async <T>(options: FetchOptions & { url: string; data?: any }) => {
  const appConfig: any = useAppConfig();
  const runtimeConfig = useRuntimeConfig();

  const url = options.url;
  const key = hash(JSON.stringify(options) + url);
  const apiBase = runtimeConfig.public.apiBase;

  const defaultOptions: FetchOptions = {
    baseURL: apiBase + appConfig.api.prefix,
    timeout: appConfig.api.timeout,
    credentials: 'omit', // "include" | "omit" | "same-origin"分别代表始终携带cookie、始终不带cookie、同源携带cookie
    headers: appConfig.api.commonHeaders,
    retry: false
  };

  // 请求拦截
  defaultOptions.onRequest = (context: FetchContext): Promise<void> | void => {
    const { options } = context;
    // console.log('request', options);

    // 处理data参数差异
    if (options.method !== 'GET' && (options as any).data) {
      options.body = (options as any).data;
      delete (options as any).data;
    }
  };

  // 响应拦截
  defaultOptions.onResponse = (context: FetchContext): Promise<void> | void => {
    const { response } = context;
    // console.log('response', response);

    if (response && response.status === 200) {
      // 逻辑层请求失败
      const [isFailed, msg] = requestFailed(response);
      if (isFailed) {
        // 不需要返回东西，保持_data的值就行，否则onResponse会不执行
        // return Promise.reject({ code: response?._data.code, message: msg });
      } else {
        // 逻辑层请求成功
      }
    }
  };

  const newOptions: object = { ...defaultOptions, ...options };
  const { error, data } = await useFetch(url, { ...newOptions, key });

  const errorValue = error.value ?? ({} as any);
  const dataValue = data.value ? (data.value as ResponseData<T>) : ({} as any);
  return { error: errorValue, data: dataValue };
};

export default request;
