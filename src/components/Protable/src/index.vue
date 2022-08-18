<template>
  <TouchBar @open-drawer="openDrawer"/>
  <InnerTable />
  <InnerDrawer ref="drawerRef"/>
</template>

<script lang="ts" setup>

import InnerTable from './components/InnerTable.vue';
import TouchBar from './components/TouchBar.vue';
import InnerDrawer from './components/InnerDrawer.vue';
import { ref } from 'vue';
// 打开 drawer(新增、查看、编辑)
interface DrawerExpose {
	acceptParams: (params: any) => void;
}
const drawerRef = ref<DrawerExpose>();
const openDrawer=(v: any)=>{
  console.log(v);
  drawerRef.value!.acceptParams(v);
}
</script>

<style scoped>
</style>