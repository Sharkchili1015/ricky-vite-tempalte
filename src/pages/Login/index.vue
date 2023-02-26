<template>
  <div>
    <el-form
      ref="formRef"
      :model="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="userName"
        prop="userName"
        :rules="[
          { required: true, message: 'userName is required' },
        ]"
      >
        <el-input
          v-model.number="loginForm.userName"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="passWord"
        prop="passWord"
        :rules="[
          { required: true, message: 'passWord is required' },
        ]"
      >
        <el-input
          v-model.number="loginForm.passWord"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">
          Submit
        </el-button>
        <el-button @click="resetForm(formRef)">
          Reset
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { LoginForm } from '@model/user'
import type { FormInstance } from 'element-plus'
import { useUserInfoStore } from '@store/mouldes/user'

const store = useUserInfoStore()
const formRef = ref<FormInstance>()
const loginForm = reactive<LoginForm>({
  userName: '',
  passWord: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.validate((valid) => {
    if (valid) {
      store.Login(loginForm)
    }
    else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}
</script>

  <style lang="scss"></style>
