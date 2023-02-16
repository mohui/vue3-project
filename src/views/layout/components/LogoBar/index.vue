<template>
  <div class="logo">
    <img src="@/assets/hui.jpeg" alt="">
    <h2 class="title">vue3-admin</h2>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.logo{
  display: flex;
  align-items: center;
  padding-left: 14px;
  height: 64px;
  overflow: hidden;
  white-space: nowrap;
  img{
    height: 32px;
    margin-right: 8px;
  }
  .title {
    font-size: 20px;
    color: #f9f9f9;
    margin-bottom: 0;
  }
}
</style>