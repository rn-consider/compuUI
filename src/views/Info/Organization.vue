<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { onMounted, ref } from 'vue'
import { getInfoApi } from '@/api/info'

const { t } = useI18n()

const content = ref('')

onMounted(async () => {
  try {
    const response = await getInfoApi(5)
    content.value = response.info.content
  } catch (error) {
    console.error('获取信息失败:', error)
  }
})
</script>

<template>
  <ContentWrap :title="t('router.ComputerSocietyOrganization')">
    <div v-html="content"></div>
  </ContentWrap>
</template>
