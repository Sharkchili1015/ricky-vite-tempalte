<template>
  <el-config-provider :locale="lang">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useLocalesStore } from '@store/mouldes/locales'
const { lang } = toRefs(useLocalesStore())
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
