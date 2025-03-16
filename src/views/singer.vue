<template>
    <IndexList v-if="data" :singers="data"></IndexList>
</template>

<script setup lang="ts">
import IndexList from '@/components/base/index-list/index-list.vue';
import { getSingerList } from '@/service/singer';
import { singerData } from '@/types';
import { ref } from 'vue';
const data = ref<singerData[]>()
async function getData() {
    const result  = await getSingerList()
    data.value = result.singers
}
getData()
</script>