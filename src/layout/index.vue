<template>
  <div class="common-layout">
    <el-container style="width: 100%">
      <!-- 左侧侧边栏-->
      <el-aside style="width: auto">
        <LogoBar :collapsed="collapsed" />
        <MenuBar :collapsed="collapsed" />
      </el-aside>

      <!-- 右边菜单栏 -->
      <el-container style="width: 100%">
        <el-header>
          <el-row >
            <!-- 侧边栏开合折叠按钮 -->
            <el-icon style="font-size: 26px;" @click="()=>{collapsed = !collapsed}">
              <component :is="collapsed? Expand : Fold" />


            </el-icon>


          </el-row>


        </el-header>

        <!-- 右边主页面 -->
        <el-main>
          111
          <router-view />
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LogoBar from './components/LogoBar/index.vue'
import MenuBar from './components/MenuBar/index.vue'
import HeaderBar from './components/HeaderBar/index.vue'
import {Expand, Fold} from '@element-plus/icons-vue'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

function goBack() {
  router.push('/')
}

const collapsed = ref<boolean>(false)

</script>

<style lang="scss">
.common-layout {
  display: flex;
  width: 100%;
  height: 100vh;
  .el-header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #646cff;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }
  .el-aside{
      background-color: #888888;
      color: var(--el-text-color-primary);
      text-align: center;
      line-height: 1000px;
    }

  .el-main{
    background-color: #00ff00;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
    flex: 1;
  }
}
</style>