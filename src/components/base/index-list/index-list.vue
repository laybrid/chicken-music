<template>
    <Scroll class="relative h-[100%] overflow-hidden">
        <div class="pb-[30px]">
            <ul>
                <li v-for="gruop in singers" :key="gruop.title">
                    <h2 class="h-[30px] pl-5 bg-[#333] text-sm text-color-text-l leading-[30px]">{{ gruop.title }}</h2>
                    <ul>
                        <li class="flex pt-5 pl-[30px] items-center" v-for="item in gruop.list" :key="item.id">
                            <img :src="item.pic" alt="" style="flex: 0 0 50px; border-radius: 50%; height: 50px;">
                            <span class="ml-5 text-color-text-l text-md">{{ item.name }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </Scroll>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Scroll from '../scroll/scroll.vue';
import { singerData } from '@/types';
defineProps<{ singers: singerData[] }>()
</script>