<script setup>
import { ref,reactive } from 'vue';
let setup = ref("vue3");
let database = reactive({
    sex:18,
    checkbox:[],
    remeber:false,
    select:""
})
</script>
<template>
    <div>
        <h1>{{setup}}</h1><br>
        <p>{{database.sex}}</p><br>
        <p>{{database.checkbox}}</p><br>
        <p>{{database.remeber}}</p><br>
        <p>{{database.select}}</p><br>
        <p>=====================================</p>
        <input type="text" v-model="setup"><br>
        <input type="radio" v-model="database.sex" value="20"/> <input type="radio" v-model="database.sex" value="21"/><br>
        <input type="checkbox" v-model="database.checkbox" value="01"/> <input type="checkbox" v-model="database.checkbox" value="02"/>
        <input type="checkbox" v-model="database.checkbox" value="03"/> <input type="checkbox" v-model="database.checkbox" value="04"/><br>
        <input type="checkbox" v-model="database.remeber"/><br>
        <select v-model="database.select">
            <option value="">--请选择 --</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
        </select>
    </div>
</template>
<style scoped>
</style>