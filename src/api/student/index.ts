// api.ts

import request from '@/config/axios'
import { IResponse, StudentInfo, UpdateStudentRequest } from './types'

// 创建学生信息
export const addStudent = (studentData: StudentInfo): Promise<IResponse> => {
  return request.post({ url: '/api/student', data: { body: studentData } })
}

// 获取所有学生信息
export const getAllStudents = (): Promise<IResponse<StudentInfo[]>> => {
  return request.get({ url: '/api/student' })
}


// 更新学生信息
export const updateStudent = (
  studentId: number,
  updatedData: UpdateStudentRequest
): Promise<IResponse> => {
  return request.put({ url: `/api/student/${studentId}`, data: updatedData })
}

// 删除学生信息
export const deleteStudent = (studentId: number): Promise<IResponse> => {
  return request.delete({ url: `/api/student/${studentId}` })
}

// 获取指定学生信息
export const getStudentById = (studentId: number): Promise<IResponse<StudentInfo>> => {
  return request.get({ url: `/api/student/${studentId}` })
}
