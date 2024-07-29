<script lang="ts" setup>
import { ref, onMounted } from "vue";
import api from "../api";

const tableData = ref([]);


onMounted(() => {
  fetchData();
});

// 获取数据
const fetchData = async () => {
  try {
    const response = await api.getWeb();
    tableData.value = [response.data];
    console.log(tableData.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
</script>
<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="username" label="Name" width="180" />
      <el-table-column prop="password" label="密码" width="180" />
      <el-table-column prop="classg" label="班级" />
    </el-table>
  </div>
</template>
<style scoped>
</style>