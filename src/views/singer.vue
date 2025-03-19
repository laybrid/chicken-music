<template>
    <div class="fixed top-[88px] bottom-0 w-[100%]" v-loading="!data?.length">
        <IndexList v-if="data" :singers="data" @select="selectSinger"></IndexList>
    </div>
    <router-view :singer="selectedSinger"></router-view>
</template>

<script setup lang="ts">
import IndexList from '@/components/base/index-list/index-list.vue';
import { getSingerList } from '@/service/singer';
import { singerData, singer } from '@/types';
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/utils/constant';
const router = useRouter()
const data = ref<singerData[]>()
const selectedSinger = ref<singer>()
async function getData() {
    const result = await getSingerList()
    data.value = result.singers
}
function selectSinger(singer: singer) {
    selectedSinger.value = singer
    cacheSinger(singer)
    router.push(`/singer/${singer.mid}`)
}
function cacheSinger(singer: singer) {
    storage.session.set(SINGER_KEY,singer)
}
getData()
</script>