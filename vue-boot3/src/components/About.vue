<script setup>
import { ref,reactive } from 'vue';
</script>
<template>
<div>
    <p>about</p>
    <p>{{ this.$route.params.name }} 不等于baidu</p>
</div>
</template>
<style scoped>
</style>