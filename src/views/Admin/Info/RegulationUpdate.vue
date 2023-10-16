<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Editor, EditorExpose } from '@/components/Editor'
import { useI18n } from '@/hooks/web/useI18n'
import { IDomEditor } from '@wangeditor/editor'
import { ref, onMounted, unref } from 'vue'
import { getInfoApi, updateInfoApi } from '@/api/info/index' // 导入更新信息的函数
import { ElNotification } from 'element-plus'

const { t } = useI18n()
const open1 = () => {
  ElNotification({
    title: 'Success',
    message: '已自动保存',
    type: 'success'
  })
}

const open4 = () => {
  ElNotification({
    title: 'Error',
    message: '保存失败',
    type: 'error'
  })
}
const change = (editor: IDomEditor) => {
  const updatedHtml = editor.getHtml()
  // 假设 id 是你要更新的信息的标识
  const id = 4 // 学会荣誉的id

  // 在这里调用更新信息的函数
  updateInfoApi(id, { title: '章程制度', content: updatedHtml })
    .then((response) => {
      console.log('这是请求成功后', response) // 使用逗号而不是加号连接
      // 处理响应
      open1()
    })
    .catch((error) => {
      console.log('请求失败' + error)
      // 处理错误
      open4()
    })
}

const editorRef = ref<typeof Editor & EditorExpose>()

const defaultHtml = ref('')
onMounted(async () => {
  const editor = await unref(editorRef)?.getEditorRef()
  try {
    const response = await getInfoApi(4)
    defaultHtml.value = response.info.content // 假设响应包含"content"字段
    console.log(editor)
  } catch (error) {
    console.error('获取信息失败:', error)
  }
})

setTimeout(() => {
  open4()
}, 60000)
</script>

<template>
  <ContentWrap title="章程制度">
    <Editor v-model="defaultHtml" ref="editorRef" @change="change" />
  </ContentWrap>
</template>
