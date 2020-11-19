<template>
  <el-row
  type="flex"
    justify="center">
    <el-col :span="4">
      <h1>Login</h1>
      <el-input
        placeholder="请输入帳號"
        v-model="id"
        clearable>
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
        clearable>
      </el-input>
      <el-input
        type="submit">
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      id: ref(''),
      password: ref('')
    }
  }
})
</script>

<style scoped>

</style>