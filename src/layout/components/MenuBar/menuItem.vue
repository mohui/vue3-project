<template>
  <template v-for="item in menus" :key="item.name">

    <el-menu-item v-if="item.children && item.children.length > 1" :index="item.name">
      <el-icon><icon-menu /></el-icon>
      <template #title>{{ item.meta?.title }}aaa</template>
    </el-menu-item>

    <el-menu-item :index="item.name" v-else  :route="{name: item.path}">
      <el-icon><icon-menu /></el-icon>
      <template #title>{{ item.meta?.title }}ddd</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps(['menus'])
</script>
