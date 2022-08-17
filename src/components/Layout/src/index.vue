<template>
    <el-container direction="vertical" class="layout-container" style="height: 100vh">
        <el-header style="text-align: center; height: 40px;font-size: 12px;margin-bottom: 5px;">
            <div class="toolbar">
                <p>新员工VUE训战</p>
            </div>
        </el-header>
        <el-container>
            <el-aside class="el-aside" width="200px">
                <slot name="menu"></slot>
            </el-aside>
            <el-container direction="vertical">
                <el-main>
                    <slot name="main"></slot>
                </el-main>
            </el-container>
        </el-container>
        <el-footer class="footer" style="text-align: center; height: auto;font-size: 12px">
            <p style="width:100%">华为云官网</p>
        </el-footer>
    </el-container>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.layout-container .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container .el-aside {
    height: auto;
    color: var(--el-text-color-primary);

}

.layout-container .el-menu {
    border-right: none;
}

.layout-container .el-main {
    padding: 0;
}

.layout-container .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    right: 20px;
}

.footer {
    display: inline-flex;
    margin: 0 0 0 0;
    padding: 0;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}
</style>

