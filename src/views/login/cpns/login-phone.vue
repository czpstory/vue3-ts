<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="account.code"></el-input>
          <el-button type="primary" class="get-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })
    return {
      account
    }
  }
})
</script>

<style scoped lang="less">
.code {
  display: flex;
  justify-content: space-between;
  .get-code {
    margin-left: 20px;
  }
}
</style>
