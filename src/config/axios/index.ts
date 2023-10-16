// 导入名为'service'的模块，应该是用于发起 HTTP 请求的服务
import service from './service'

// 导入名为'config'的模块，用于配置一些默认的请求头
import config from './config'

// 从'config'中获取'defaultHeaders'属性，该属性应该包含默认的请求头配置
const { defaultHeaders } = config

// 定义一个名为'request'的函数，用于发起 HTTP 请求
const request = (option: AxiosConfig) => {
  const { url, method, params, data, headersType, responseType } = option

  // 调用'service'模块的'request'方法来发起请求
  return service.request({
    url: url, // 请求的URL，由调用者传递
    method, // 请求方法，由调用者传递，如 'get', 'post', 'put', 'delete'
    params, // 请求参数，由调用者传递
    data, // 请求数据，由调用者传递
    responseType: responseType, // 响应类型，由调用者传递
    headers: {
      'Content-Type': headersType || defaultHeaders
    }
  })
}

// 导出一个对象，该对象包含一些请求方法和取消请求的函数
export default {
  // 发起 GET 请求
  get: <T = any>(option: AxiosConfig) => {
    return request({ method: 'get', ...option }) as Promise<IResponse<T>>
  },

  // 发起 POST 请求
  post: <T = any>(option: AxiosConfig) => {
    return request({ method: 'post', ...option }) as Promise<IResponse<T>>
  },

  // 发起 DELETE 请求
  delete: <T = any>(option: AxiosConfig) => {
    return request({ method: 'delete', ...option }) as Promise<IResponse<T>>
  },

  // 发起 PUT 请求
  put: <T = any>(option: AxiosConfig) => {
    return request({ method: 'put', ...option }) as Promise<IResponse<T>>
  },

  // 取消指定URL的请求
  cancelRequest: (url: string | string[]) => {
    return service.cancelRequest(url)
  },

  // 取消所有请求
  cancelAllRequest: () => {
    return service.cancelAllRequest()
  }
}
