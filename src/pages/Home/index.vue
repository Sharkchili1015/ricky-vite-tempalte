<template>
  <h1>{{ t('hello.hi') }}</h1>
  <el-select v-model="lang" class="m-2" placeholder="i18n" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <comp />
</template>

<script lang="ts" setup>
import { useLocalesStore } from '@store/mouldes/locales'
import { useI18n } from 'vue-i18n'
import comp from './components/comp.vue'

const { lang } = toRefs(useLocalesStore())
const { t } = useI18n()
const options = [
  {
    value: 'zh-EN',
    label: '英语',
    key: 0,
  }, {
    value: 'zh-CN',
    label: '家乡话',
    key: 1,
  },
]
</script>
