<script lang="ts" setup>
import { message } from 'ant-design-vue/es'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const router = useRouter()
const userName = ref('')
function targetWecom() {
  if (!userName.value) {
    message.warn('请输入你的名字')
  }
  else {
    userStore.setUserName(userName.value)
    router.push({
      name: 'User',
    })
  }
}
</script>

<template>
  <a-input-group compact>
    <a-input v-model:value="userName" placeholder="请输入你的名字" class="!w-[calc(100%-100px)] !text-left" />
    <a-button type="primary" @click="targetWecom">
      进入
    </a-button>
  </a-input-group>
</template>

<style lang="less" scoped>
</style>
