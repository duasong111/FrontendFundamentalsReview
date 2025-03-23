<script setup>
import Language from '@/components/language/language.vue'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const form = reactive({
  name: ''
})
</script>
 
<template>
  <Language />
 
  <div style="margin: 50px">
    {{ t('login.title') }}
  </div>
  <el-form :model="form" label-width="120px">
    <el-form-item :label="t('login.username')">
      <el-input v-model="form.name" :placeholder="t('login.username')" />
    </el-form-item>
  </el-form>
 
  <div>
    <el-table :data="[]" />
    <el-pagination :total="100" />
  </div>
</template>