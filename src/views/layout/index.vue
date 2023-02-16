<template>
  <div class="common-layout">
    <el-container style="width: 100%">
      <!-- 左侧侧边栏-->
      <el-aside width="200px">
        <LogoBar />
        <MenuBar />
      </el-aside>

      <el-container style="width: 100%">
        <el-header>Headedddr</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LogoBar from './components/LogoBar/index.vue'
import MenuBar from './components/MenuBar/index.vue'
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