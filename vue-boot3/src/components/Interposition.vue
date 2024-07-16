<script setup>
import {ref,reactive,toRef,toRefs} from 'vue';
let context = ref("可能");
let content = ref("<p style='color:red'>可能</p>");
</script>

<template>
<div>
    <p v-text="context"></p><!-- 输出为纯文本 -->
    <p v-html="context"></p>
    <p>==============</p>
    <p v-text="content"></p><!-- 输出为纯文本 -->
    <p v-html="content"></p>
</div>
</template>

<style scoped>

</style>
