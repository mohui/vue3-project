<template>
  <el-menu
      default-active="1"
      class="el-menu"
      :collapse="collapsed"
  >
    <template v-for="item in routerMenu" :key="item.name">

      <el-menu-item v-if="item.children && item.children.length > 1" :index="item.name"  @click="toPath(item.name)">
        <el-icon><component :is="item.meta?.icon" /></el-icon>
        <template #title>{{ item.meta?.title }}</template>
      </el-menu-item>


      <el-menu-item :index="item.name" v-else  :route="{name: item.path}"  @click="toPath(item.name)">
        <el-icon> <component :is="item.meta?.icon" /> </el-icon>
        <template #title>{{ item.meta?.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {routeMenus} from '@/router'
// 用点击事件跳转
import {useRouter} from "vue-router";
const router = useRouter()
const toPath = (item: string) => {
  router.push({name: item})
}

const routerMenu = computed(() => {
  return routeMenus.filter(it => {
    return it.name;
  })
});

defineProps({
  collapsed: {
    type: Boolean
  }
})
</script>

<style>
.el-menu {
  width: 200px;
  min-height: 400px;
  height: 100vh;
  border: none;
}
</style>