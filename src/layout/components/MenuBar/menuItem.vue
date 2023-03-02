<template>
  <template v-for="item in menus" :key="item.name">

    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.name"  >

      <template #title>
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <span>
            {{ item.meta?.title }}
          </span>
      </template>
      <menu-item :menus="item.children"></menu-item>
    </el-sub-menu>


    <el-menu-item :index="item.name" v-else  :route="{name: item.path}"  @click="toPath(item.name)">

      <template #title>
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <span>
          {{ item.meta?.title }}
        </span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps(['menus'])
// 用点击事件跳转
import {useRouter} from "vue-router";
const router = useRouter()
const toPath = (item: string) => {
  router.push({name: item})
}
</script>
