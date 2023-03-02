<template>
  <el-tabs
      v-model="activeKey"
      type="card"
      editable
      @tab-click ="clickHandle"
      @tab-remove="removeTab"
  >
    <el-tab-pane
        v-for="item in tabsList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
        closable
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {computed, onMounted, ref, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from "vue-router";
import {Itab} from "@/store/type";

const store = useStore()
const route = useRoute()
const router = useRouter()

const tabsList = computed(()=>{
  return store.getters.getAddTab;
});
// 索引
const activeKey = ref('');

// 添加tab
const addTab = ()=> {
  // 从router中取出 meta, path
  const {meta, path} = route;
  const tab: Itab = {
    path: path,
    title: meta.title as string
  };
  store.commit('addTab', tab)
}

watch(()=> route.path, ()=>{
  activeKey.value = route.path
  addTab()
})

// 点击事件
const clickHandle = (event: any) => {
  router.push({path: event.props.name})
}

/**
 * 移除tab
 *
 * 1. 如果是最后一个不让移除
 * @param targetName
 */
const removeTab = (targetName: string) => {
  console.log(tabsList.value.length)
  // 1. 如果是最后一个不让移除
  if(tabsList.value.length == 1) {
    return alert("这已经是最后一个了")
  }
  // 2. 移除当前页
  if (activeKey.value == targetName) {
    tabsList.value.forEach((tab: Itab, index: number) => {
      if (tab.path == targetName) {
        const nextTab = tabsList.value[index + 1] || tabsList.value[index -1]
        if (nextTab) {
          activeKey.value = nextTab.path;
        }
      }
    })
  }
  store.commit('closeCurrentTab', targetName)
}

// 刷新缓存数据
const refresh = () => {
  window.addEventListener('beforeunload', ()=>{
    sessionStorage.setItem('TABS_ROUTES', JSON.stringify(tabsList.value));
  })
  // 拿到数据
  let session = sessionStorage.getItem('TABS_ROUTES')
  if (session) {
    // 解析字符串
    let tabItem = JSON.parse(session)
    // 遍历
    tabItem.forEach((tab: Itab) => {
      store.commit('addTab', tab)
    })
  }
}
onMounted(() => {
  // 初始化页面生成tab
  addTab()
  // 刷新保存数据
  refresh()
})
</script>
