// 在前端的 info 目录下的 index.ts 文件中

import request from '@/config/axios'
import { UpdateInfoRequest } from './types'

// 创建信息
export const createInfoApi = (data: UpdateInfoRequest): Promise<IResponse> => {
  return request.post({ url: '/infos', data })
}

// 获取所有信息
export const getAllInfoApi = (): Promise<IResponse<UpdateInfoRequest[]>> => {
  return request.get({ url: '/infos' })
}

// 更新信息
export const updateInfoApi = (id: number, data: UpdateInfoRequest): Promise<IResponse> => {
  return request.put({ url: `/infos/${id}`, data })
}

// 删除信息
export const deleteInfoApi = (id: number): Promise<IResponse> => {
  return request.delete({ url: `/infos/${id}` })
}

// 获取特定信息
export const getInfoApi = (id: number): Promise<IResponse<UpdateInfoRequest>> => {
  return request.get({ url: `/infos/${id}` })
}
