<template>
    <div class="fixed top-[88px] bottom-0 w-[100%]" v-loading="!data?.length">
        <IndexList v-if="data" :singers="data" @select="selectSinger"></IndexList>
    </div>
    <router-view :singer="selectedSinger"></router-view>
</template>

<script setup lang="ts">
import IndexList from '@/components/base/index-list/index-list.vue';
import { getSingerList } from '@/service/singer';
import { singerData,singer } from '@/types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const data = ref<singerData[]>()
const selectedSinger = ref<singer>()
async function getData() {
    const result  = await getSingerList()
    data.value = result.singers
}
function selectSinger(item:singer) {
    selectedSinger.value = item
    router.push(`/singer/${item.mid}`)
}
getData()
</script>