<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="collapsed"
  >

    <template v-for="item in routerMenu" :key="item.name">

      <el-menu-item v-if="item.children && item.children.length > 1" :index="item.name"  @click="toPath(item.name)">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ item.meta?.title }}{{ collapsed }}</template>
      </el-menu-item>


      <el-menu-item :index="item.name" v-else  :route="{name: item.path}">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ item.meta?.title }}ddd</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import {routeMenus} from '../../../router'
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

// const isCollapse = ref(false)
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }

defineProps({
  collapsed: {
    type: Boolean
  }
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border: none;
}
</style>