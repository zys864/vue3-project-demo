<script setup lang="ts">

const emits = defineEmits(['openDrawer'])
const openDrawer = () => {
    emits('openDrawer', {
        title: "添加用户信息",
        isView: true,
    })
}
</script>

<template>
    <el-row>
        <el-col :span="24">
            <el-button @click="openDrawer">权限申请</el-button>
            <el-button type="danger">删除权限</el-button>
            <el-button type="primary">权限延期</el-button>
        </el-col>
    </el-row>
</template>

<style scoped>
</style>