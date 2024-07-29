<script setup>
import { ref, reactive } from "vue";
let msg = "hello";
</script>
<template>
  <div>
    <slot :text="msg" url="www.baidu.com"></slot>
  </div>
</template>
<style scoped>
</style>