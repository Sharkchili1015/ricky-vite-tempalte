<template>
  <div>
    {{ isLoading }}
    {{ userInfo }}
  </div>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from './store'
const store = useUserInfoStore()
const { userInfo, isLoading } = store
</script>

  <style lang="scss"></style>
