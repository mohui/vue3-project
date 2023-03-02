<template>
  <el-tabs
      v-model="activeKey"
      type="card"
      editable
      @tab-click ="clickHandle"
  >
    <el-tab-pane
        v-for="item in tabsList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from "vue-router";
import {Itab} from "@/store/type";

const store = useStore()
const route = useRoute()

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
const clickHandle = (event: any) =>{
  console.log(event.props.name)
  // router.push({path: event.props.name})
}
</script>
