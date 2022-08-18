<template>
    <div id="ap">
        <el-table :data="tableDataView" stripe style="width: 100%" max-height="550">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="日期" sortable min-width="140" />
            <el-table-column prop="name" label="姓名" min-width="80" />
            <el-table-column prop="province" label="省份" min-width="80" />
            <el-table-column prop="city" label="市区" min-width="80" />
            <el-table-column prop="address" label="地址" />
            <el-table-column align="right" min-width="100">
                <template #header>
                    <el-input v-model="search" size="small" @change="filterTableDataHandler"
                        placeholder="Type to search" clearable />
                </template>
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">延期</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                        <el-icon>
                            <Delete style="margin-right: 2px;"/>
                        </el-icon>
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background v-model:currentPage="current_page"
            @update:currentPage="handle_current_pagination_change" v-model:page-size="page_size"
            @update:page-size="handle_current_pagination_change" :page-sizes="[10, 20, 30, 40]"
            :hide-on-single-page=true layout="total, sizes, prev, pager, next, jumper" :total=table_len />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UserInfo } from '/@/api/types'

let tableDataInner: Array<UserInfo> = []
for (var i = 1; i <= 200; i++) {
    tableDataInner.push({
        id: i,
        date: new Date(),
        name: "王晓虎" + i.toString(),
        province: "江苏",
        city: "南京",
        address: "雨花区",
    })
}
const search = ref('')
let current_page = ref(1)
let page_size = ref(10)
let table_len = ref(tableDataInner.length)
let tableDataView = ref(tableDataInner.slice(0, page_size.value))
const handle_current_pagination_change = () => {
    const start_index = (current_page.value - 1) * page_size.value
    const end_index = start_index + page_size.value
    tableDataView.value = tableDataInner.slice(start_index, end_index)
}

const filterTableDataHandler = () =>
    tableDataView.value = tableDataInner.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )


const handleEdit = (index: number, row: UserInfo) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: UserInfo) => {
    console.log(row.id)
    const deleted_user = tableDataView.value.splice(index, 1)
    tableDataInner.filter(user => user.id !== row.id)
    table_len.value = tableDataInner.length
    console.log('deleted_user', deleted_user)
}

</script>

<style scoped>
.el-pagination {
    margin-top: 5px;
}
</style>