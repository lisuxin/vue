<script setup>
import { ref,reactive } from 'vue';
import chacao from './chacao.vue';
</script>
<template>
    <div>
        <chacao>
            <template v-slot="slotPrpos">{{slotPrpos.text}}===={{slotPrpos.url}}</template>
        </chacao>
    </div>
</template>
<style scoped>
</style>