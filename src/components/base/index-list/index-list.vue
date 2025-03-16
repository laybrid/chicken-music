<template>
    <Scroll class="relative h-[100%] overflow-hidden" :probe-type="3" @scroll="onScroll">
        <div class="pb-[30px]">
            <ul ref="groupRef">
                <li v-for="gruop in singers" :key="gruop.title">
                    <h2 class="h-[30px] pl-5 bg-color-highlight-background text-sm text-color-text-l leading-[30px]">{{ gruop.title }}</h2>
                    <ul>
                        <li class="flex pt-5 pl-[30px] items-center" v-for="item in gruop.list" :key="item.id">
                            <img v-lazy="item.pic" alt="" style="flex: 0 0 50px; border-radius: 50%; height: 50px;">
                            <span class="ml-5 text-color-text-l text-md">{{ item.name }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="absolute top-0 left-0 w-[100%]" v-show="fixedTitle">
            <h2 class="h-[30px] pl-5 bg-color-highlight-background text-sm text-color-text-l leading-[30px]" >{{ fixedTitle }}</h2>
        </div>
    </Scroll>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue';
import Scroll from '../scroll/scroll.vue';
import useFixed from './usefixed';
import { singerData } from '@/types';
const props = defineProps<{ singers: singerData[]}>()
const {groupRef,onScroll,fixedTitle} = useFixed(props)

</script>