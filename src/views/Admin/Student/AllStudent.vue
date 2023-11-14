<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { Table, TableColumn } from '@/components/Table'
import { getAllStudents } from '@/api/student/index' // 导入更新信息的函数
import { StudentInfo } from '@/api/student/types'
import { getInfoApi, updateInfoApi } from '@/api/info/index'
const columns = reactive<TableColumn[]>([
  {
    field: 'StudentName',
    label: '姓名'
  },
  {
    field: 'SchoolName',
    label: '学校'
  },
  {
    field: 'Grade',
    label: '年级'
  },
  {
    field: 'Parent1Name',
    label: '家长1姓名'
  },
  {
    field: 'Parent1Phone',
    label: '家长1电话'
  },
  {
    field: 'Parent2Name',
    label: '家长2姓名'
  },
  {
    field: 'Parent2Phone',
    label: '家长2电话'
  },
  {
    field: 'Address',
    label: '地址'
  }
])

const data = reactive<StudentInfo[]>([])

onMounted(async () => {
  try {
    // 打印请求的URL
    console.log('Requesting URL:', '/api/student')

    // 调用获取所有学生的 API
    const response = await getAllStudents()

    // 将获取到的学生数据填充到表格的数据中
    if (response.code === '200') {
      data.push(...response.students.map((student) => student.Student))
    } else {
      console.error('Failed to fetch students:', response.message)
    }
  } catch (error) {
    console.error('Error fetching students:', error)
  }
})
</script>

<template>
  <Table :columns="columns" :data="data" />
</template>
