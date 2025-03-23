<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const languages = [
  { name: 'English', value: 'en' },
  { name: '中文', value: 'zh-cn' }
]
const handleSetLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('language', lang)
}
</script>
 
<template>
  <el-button type="" v-for="item in languages" :key="item.value" @click="handleSetLanguage(item.value)">{{ item.name }}</el-button>
</template>