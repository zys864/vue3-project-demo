<template>
    <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="600px" :title="`${drawerData.title}用户`">
        <el-form label-width="100px" style="max-width: 460px">
            <el-form-item label="姓名">
                <el-input v-model:name="add_user_info.name" />
            </el-form-item>
            <el-form-item label="省份">
                <el-input v-model:province="add_user_info.province" />
            </el-form-item>
            <el-form-item label="市区">
                <el-input v-model:city="add_user_info.city" />
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model:address="add_user_info.address" />
            </el-form-item>
            <el-form-item label="权限日期">
                <el-date-picker v-model:date="add_user_info.date" type="date" placeholder="Pick a day" />
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="drawerVisible = false">取消</el-button>
            <el-button type="primary" v-show="!drawerData.isView" @click="handleSubmit">确定</el-button>
        </template>
    </el-drawer>
</template>

<script setup lang="ts" name="UserDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import { UserInfo } from "/@/api/types";

type AddUserInfo = Partial<UserInfo>


let add_user_info = reactive<AddUserInfo>({})


interface DrawerProps {
    title: string;
    isView: boolean;
    rowData?: UserInfo;
    apiUrl?: (params: any) => Promise<any>;
    getTableList?: () => Promise<any>;
}

// drawer框状态
const drawerVisible = ref(false);
const drawerData = ref<DrawerProps>({
    isView: false,
    title: ""
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
    drawerData.value = params;
    drawerVisible.value = true;
};

const ruleFormRef = ref<FormInstance>();
// 提交数据（新增/编辑）
const handleSubmit = () => {
    ruleFormRef.value!.validate(async valid => {
        if (!valid) return;
        try {
            await drawerData.value.apiUrl!(drawerData.value.rowData);
            ElMessage.success({ message: `${drawerData.value.title}用户成功！` });
            drawerData.value.getTableList!();
            drawerVisible.value = false;
        } catch (error) {
            console.log(error);
        }
    });
};

// 公共校验方法（图片上传成功触发重新校验）
const checkValidate = (val: string) => {
    ruleFormRef.value!.validateField(val, () => { });
};

defineExpose({
    acceptParams
});
</script>
