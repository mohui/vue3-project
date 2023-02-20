<template>
  <div class="common-layout">
    <el-container style="width: 100%">
      <!-- 左侧侧边栏-->
      <el-aside width="200px">
        <LogoBar />
        <MenuBar />
      </el-aside>

      <!-- 右边菜单栏 -->
      <el-container style="width: 100%">
        <el-header>
          <el-button type="primary" class="exit" @click="goBack">退出</el-button>
        </el-header>

        <!-- 右边主页面 -->
        <el-main>
          111
          <router-view />
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LogoBar from './components/LogoBar/index.vue'
import MenuBar from './components/MenuBar/index.vue'

import {useRouter} from 'vue-router'
const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<style lang="scss">
.common-layout {
  display: flex;
  width: 100%;
  height: 100vh;
  .el-header {
    background-color: #646cff;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }
  .el-aside{
      background-color: #888888;
      color: var(--el-text-color-primary);
      text-align: center;
      line-height: 200px;
    }

  .el-main{
    background-color: #00ff00;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
    flex: 1;
  }
}
</style>