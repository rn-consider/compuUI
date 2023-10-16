<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Editor, EditorExpose } from '@/components/Editor'
import { useI18n } from '@/hooks/web/useI18n'
import { IDomEditor } from '@wangeditor/editor'
import { ref, onMounted, unref } from 'vue'
import { updateInfoApi } from '@/api/info/index' // 导入更新信息的函数
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
  // console.log(updatedHtml)

  // 假设 id 是你要更新的信息的标识
  const id = 123 // 替换为实际的信息标识

  // 在这里调用更新信息的函数
  updateInfoApi(id, { title: 'Your Title', content: updatedHtml })
    .then((response) => {
      // 处理响应
      open1()
    })
    .catch((error) => {
      // 处理错误
      open4()
    })
}

const editorRef = ref<typeof Editor & EditorExpose>()

const defaultHtml = ref('')

onMounted(async () => {
  const editor = await unref(editorRef)?.getEditorRef()
  console.log(editor)
})

setTimeout(() => {
  defaultHtml.value = '<p>hello <strong>world</strong></p>'
}, 3000)
</script>

<template>
  <ContentWrap :title="t('richText.richText')" :message="t('richText.richTextDes')">
    <Editor v-model="defaultHtml" ref="editorRef" @change="change" />
  </ContentWrap>
</template>
