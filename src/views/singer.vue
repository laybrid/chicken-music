<template>
    <div class="fixed top-[88px] bottom-0 w-[100%]" v-loading="!data?.length">
        <IndexList v-if="data" :singers="data"></IndexList>
    </div>
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