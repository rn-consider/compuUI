// 在前端的 info 目录下的 index.ts 文件中

import request from '@/config/axios'
import { UpdateInfoRequest } from './types'

// 创建信息
export const createInfoApi = (data: UpdateInfoRequest): Promise<IResponse> => {
  return request.post({ url: '/api/infos', data })
}

// 获取所有信息
export const getAllInfoApi = (): Promise<IResponse<UpdateInfoRequest[]>> => {
  return request.get({ url: '/api/infos' })
}

// 更新信息
export const updateInfoApi = (id: number, data: UpdateInfoRequest): Promise<IResponse> => {
  return request.put({ url: `/api/infos/${id}`, data })
}

// 删除信息
export const deleteInfoApi = (id: number): Promise<IResponse> => {
  return request.delete({ url: `/api/infos/${id}` })
}

// 获取特定信息
export const getInfoApi = (id: number): Promise<IResponse<UpdateInfoRequest>> => {
  return request.get({ url: `/api/infos/${id}` })
}
