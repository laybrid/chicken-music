<template>
    <div class="relative h-[100%]">
        <ChevronDoubleLeftIcon class="absolute  top-[7px] left-[15px] z-20 size-7 text-color-theme"
            @click="$router.back()">
        </ChevronDoubleLeftIcon>
        <div
            class="absolute top-[7px] left-1/2 -translate-x-1/2 text-ellipsis overflow-hidden whitespace-nowrap text-lg text-color-text z-20">
            {{ title }}</div>
        <div class="relative w-[100%] bg-cover" :style="bgStyle" ref="bgImage">
            <div class="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(7,17,27,0.4)]" :style="filterStyle"></div>
            <div class="absolute bottom-5 z-10 w-[100%]" v-show="scrollY <= maxTranslateY">
                <div
                    class="w-[135px] py-[3px] my-0 mx-auto text-center border border-solid border-color-theme rounded-[100px] text-color-theme">
                    <PlayCircleIcon class="inline-block size-5 mr-1"></PlayCircleIcon>
                    <span class="text-sm">随机播放全部</span>
                </div>
            </div>
        </div>
        <Scroll class="absolute bottom-0 w-[100%] z-0" :style="scrollStyle" :probe-type="3" @scroll="onScroll">
            <div class="py-5 px-[30px] bg-color-background">
                <SongList :songs="songs" />
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
const RESERVED_HEIGHT = 40
const bgImage = ref()
const heightImage = ref(0)
const scrollY = ref(0)
const maxTranslateY = ref(0)
onMounted(() => {
    heightImage.value = bgImage.value.clientHeight
    maxTranslateY.value = heightImage.value - RESERVED_HEIGHT
})
const bgStyle = computed(() => {
    let zIndex = 0;
    let paddingTop = "70%";
    let height = 0;
    // 移动端兼容问题
    let translateZ = 0
    if (scrollY.value > maxTranslateY.value) {
        zIndex = 10
        paddingTop = '0'
        height = RESERVED_HEIGHT
        translateZ = 1
    }
    let scale = 1
    if (scrollY.value < 0) {
        scale = 1 + Math.abs(scrollY.value / heightImage.value)
    }
    return {
        zIndex,
        paddingTop,
        height: height + 'px',
        backgroundImage: `url(${props.pic})`,
        transform: `scale(${scale})translateZ(${translateZ}px)`

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
const filterStyle = computed(() => {
    let blur = 0
    if (scrollY.value > 0) {
        blur = Math.min(scrollY.value / heightImage.value, maxTranslateY.value / heightImage.value) * 20
    }
    return {
        backdropFilter: `blur(${blur}px)`,
    }
})
interface pos {
    x: number,
    y: number
}
function onScroll(pos: pos) {
    scrollY.value = -pos.y
}
</script>
