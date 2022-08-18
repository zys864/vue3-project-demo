<script setup lang="ts">

</script>

<template>
    <el-menu :default-openeds="['1', '2']">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <MessageBox />
                </el-icon>
                基本信息
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">我的权限</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-2">
                <template #title>操作记录</template>
                <el-menu-item index="1-2-1">操作记录2</el-menu-item>
                <el-menu-item index="1-2-1">操作记录3</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item-group>
            <el-menu-item index="2">我的事务</el-menu-item>
        </el-menu-item-group>
    </el-menu>
</template>

<style scoped>
.table {
    min-height: 700px;
    min-width: 900px;
}
</style>