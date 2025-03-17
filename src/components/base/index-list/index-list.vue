<template>
    <Scroll class="relative h-[100%] overflow-hidden" :probe-type="3" @scroll="onScroll" ref="scrollRef">
        <div class="pb-[30px]">
            <ul ref="groupRef">
                <li v-for="gruop in singers" :key="gruop.title">
                    <h2 class="h-[30px] pl-5 bg-color-highlight-background text-sm text-color-text-l leading-[30px]">{{ gruop.title }}</h2>
                    <ul>
                        <li @click="onclick(item)" 
                        class="flex pt-5 pl-[30px] items-center" v-for="item in gruop.list" :key="item.id">
                            <img v-lazy="item.pic" alt="" style="flex: 0 0 50px; border-radius: 50%; height: 50px;">
                            <span class="ml-5 text-color-text-l text-md">{{ item.name }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="absolute top-0 left-0 w-[100%]" v-show="fixedTitle" :style="fixedStyle">
            <h2 class="h-[30px] pl-5 bg-color-highlight-background text-sm text-color-text-l leading-[30px]" >{{ fixedTitle }}</h2>
        </div>
        <div class="absolute top-1/2 right-1 -translate-y-1/2 w-5 py-5 rounded-[10px] text-center bg-color-background-d"
        @touchstart.stop.prevent="onStart"
        @touchmove.stop.prevent="onMove">
            <ul>
                <li  class="text-color-text-l text-sm" v-for="(item,index) in shortList" :key="item"
                :class="{'text-color-theme': currentIndex === index}"
                :data-index="index">{{ item }}</li>
            </ul>
        </div>
    </Scroll>
</template>

<script setup lang="ts">
import { defineProps,defineEmits } from 'vue';
import Scroll from '../scroll/scroll.vue';
import useFixed from './use-fixed';
import useShortList from './uses-shortlist';
import { singerData,singer } from '@/types';
const props = defineProps<{ singers: singerData[]}>()
const emit = defineEmits(['select'])
const {groupRef,onScroll,fixedTitle,fixedStyle,currentIndex} = useFixed(props)
const {shortList,onStart,onMove,scrollRef} = useShortList(props,groupRef)

function onclick(item:singer) {
    emit('select',item)
}
</script>