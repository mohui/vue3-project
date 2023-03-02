<template>
  <el-tabs
      v-model="activeKey"
      type="card"
      @tab-click ="clickHandle"
      @tab-remove="removeTab"
      @contextmenu.prevent.native="openContextMenu($event)"
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
  <ul v-show="contextMenuVisible" :style="{left: left + 'px', top: top + 'px'}" class="contextmenu">
    <li @click="closeAllTabs">关闭所有</li>
    <li @click="closeOtherTabs('left')">关闭左边</li>
    <li @click="closeOtherTabs('right')">关闭右边</li>
    <li @click="closeOtherTabs('other')">关闭其他</li>
  </ul>
</template>
<script lang="ts" setup>
import {computed, onMounted, Ref, ref, watch} from 'vue'
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

// 右击显示的东西变量, 默认不展示
const contextMenuVisible: Ref<boolean> = ref(false);
const left = ref('')
const top = ref('')

// 右键显示菜单列表(关闭所有, 左边, 右边, 其他)
const openContextMenu = (e: any) => {
  if (e.srcElement.id) {
    // 为了不要 "tab-", 拿到ID
    let currentContextTabId = e.srcElement.id.split("-")[1];

    // 右键打卡
    store.commit('saveCurContextTabId', currentContextTabId)
    // 展示出来
    contextMenuVisible.value = true;
    // 展示的位置, 效果是能出现在鼠标的点击的右下角
    left.value = e.clientX
    top.value = e.clientY + 10
  }
}

// 关闭所有
const closeAllTabs = () => {
  store.commit('closeAllTabs')
  // 把选项卡关闭
  contextMenuVisible.value = false;
  router.push("/home")
}
// 关闭其他的(包含 左边, 右边, 选中之外)
const closeOtherTabs = (par: string) => {
  store.commit('closeOtherTabs', par)
  // 把选项卡关闭
  contextMenuVisible.value = false;
}
// 监控右键删除列表, 如果点击, 就会消失
watch(()=>contextMenuVisible.value, ()=> {
  if (contextMenuVisible.value) {
    window.addEventListener("click", ()=> contextMenuVisible.value = false)
  } else {
    window.removeEventListener("click", ()=> contextMenuVisible.value = false)
  }
})
</script>

<style lang="scss" scoped>
.contextmenu {
  width: 100px;
  margin: 0;
  border: 1px solid #ccc;
  background: #ccc;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  li {
    margin: 0;
    padding: 7px 16px;
    &:hover {
      background: #f2f2f2;
      cursor: pointer;
    }
  }
}
</style>