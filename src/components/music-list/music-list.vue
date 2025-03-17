<template>
    <div class="relative h-[100%]">
        <ChevronDoubleLeftIcon class="absolute  top-[7px] left-[15px] z-20 size-7 text-color-theme">
        </ChevronDoubleLeftIcon>
        <div
            class="absolute top-[7px] left-1/2 -translate-x-1/2 text-ellipsis overflow-hidden whitespace-nowrap text-lg text-color-text z-20">
            {{ title }}</div>
        <div class="relative w-[100%] bg-cover" :style="bgStyle" ref="bgImage">
            <div class="absolute bottom-5 z-10 w-[100%]">
                <div
                    class="w-[135px] py-[3px] my-0 mx-auto text-center border border-solid border-color-theme rounded-[100px] text-color-theme">
                    <PlayCircleIcon class="inline-block size-5 mr-1"></PlayCircleIcon>
                    <span class="text-sm">随机播放全部</span>
                </div>
            </div>
        </div>
        <Scroll class="absolute bottom-0 w-[100%] z-0" :style="scrollStyle">
            <div class="py-5 px-[30px] bg-color-background">
                <SongList :songs="songs"/>
            </div>
        </Scroll>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, ref, computed, onMounted } from 'vue';
import { song } from '@/types';
import { PlayCircleIcon, ChevronDoubleLeftIcon } from '@heroicons/vue/24/outline'
import SongList from '../base/song-list/song-list.vue'
import Scroll from '../base/scroll/scroll.vue'
const props = defineProps<{
    songs: song[],
    title: string,
    pic: string
}>()
const bgImage = ref()
const heightImage = ref(0)
onMounted(() => {
    heightImage.value = bgImage.value.clientHeight
})
const bgStyle = computed(() => {
    let zIndex = 0;
    let paddingTop = "70%";
    let height = 0;
    return {
        zIndex,
        paddingTop,
        height,
        backgroundImage: `url(${props.pic})`,

    }
})
const scrollStyle = computed(() => {
    let bottom = 0
    let top = heightImage.value
    return {
        top: `${top}px`,
        bottom
    }
})
</script>
