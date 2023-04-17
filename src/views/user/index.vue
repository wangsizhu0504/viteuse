<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <span class="pr-10px">你好,{{ userStore.userName }}</span>
  <a-button @click="goBack">
    返回
  </a-button>
</template>

<style lang="less" scoped>
</style>
