<template>
  <h1>{{ msg }}</h1>

  <div>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
    >
      <el-form-item label="登录名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>


    </el-form>
  </div>

</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// 引入路由
import {useRouter} from 'vue-router'

const router = useRouter()
const msg = ref("登录页面")

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入登录名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度应为3-12', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '长度应为6-12', trigger: 'blur' },
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push('/home')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss">

</style>