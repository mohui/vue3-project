<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
  >

    <div v-for="item in routerMenu" :key="item.name">
      <el-menu-item :index="item.name"  :route="{name: item.path}">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ item.meta?.title }}</template>
      </el-menu-item>
    </div>


    <el-menu-item index="/school" route="{name= '/school'}">
      <el-icon><setting /></el-icon>
      <template #title>天堂之门</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import {routeMenus} from '../../../router'

const routerMenu = computed(() => {
  return routeMenus.filter(it => {
    return it.name;
  })
});

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>