<template>
    <div class="text-[0] " ref="root">
        <div class="relative overflow-hidden text-nowrap">
            <div class="slider-page" v-for="item in sliders" :key="item.id">
                <a :href="item.link" class="block w-[100%]">
                    <img :src="item.pic" alt="" class="block w-[100]">
                </a>
            </div>
        </div>
        <div class="dots-wrapper">
            <span class="dot" v-for="(item, index) in sliders" :key="item.id"
                :class="{ 'active': index === currentPageIndex }"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import useSlider from './useSlider'
import { sliderData } from '@/types';
defineProps<{ sliders: sliderData[] }>()
const root = ref()
const { currentPageIndex } = useSlider(root)
</script>

<style scoped>
.slider-page {
    display: inline-block;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
}

.dots-wrapper {
    position: absolute;
    left: 50%;
    bottom: 12px;
    line-height: 12px;
    transform: translateX(-50%);
}

.dot {
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    transform: translateZ(1px);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
}

.active {
    width: 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.8);
}
</style>