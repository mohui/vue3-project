<template>
  <el-menu
      default-active="1"
      class="el-menu"
      :collapse="collapsed"
  >
    <menu-item :menus="routerMenu"></menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import MenuItem from './menuItem.vue'
import {computed} from 'vue'
import {routeMenus} from '@/router'
// 用点击事件跳转
import {useRouter} from "vue-router";
const router = useRouter()


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