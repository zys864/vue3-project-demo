<script setup lang="ts">
import Protable from "/@/components/Protable";
import Menu from '/@/components/Menu';
import Layout from "/@/components/Layout";
</script>

<template>
  <Layout>
    <template v-slot:menu>
      <Menu />
    </template>
    <template v-slot:main>
      <Protable />
    </template>
  </Layout>
</template>

<style scoped>
.table {
  min-height: 700px;
  min-width: 900px;
}
</style>
