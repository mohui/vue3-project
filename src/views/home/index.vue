

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ getToken() }}</h1>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import {getToken} from '../../utils/auth'




const msg = ref("首页")
</script>