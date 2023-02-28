<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
          v-for="(item, index) in breadCrumb" :key="index"
      >{{item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import {useRoute, RouteLocationMatched} from "vue-router";
import {Ref, ref, watch} from "vue";
// 拿到路由
const route = useRoute()
// 声明一个面包屑的数组
const breadCrumb: Ref<RouteLocationMatched[]> = ref([])
const getBreadCrumb = () => {
  // 过滤路由信息
  let matched = route.matched.filter((item) => item.meta && item.meta.title && item.children.length !== 1);
  // 拿到第一条数据
  const first = matched[0]
  if (first.path !== '/index') {
    matched = [{path: '/index', meta: {title: '首页'}} as any].concat(matched);
  }
  breadCrumb.value = matched;
}

getBreadCrumb()
// 监控路由, 如果路由发生变化, 那么面包屑数据变化
watch(()=>route.path, () => {
  getBreadCrumb()
})

</script>

<style lang="scss">
</style>