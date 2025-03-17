<template>
    <div>
        <ul>
            <li v-for="item in songs" :key="item.id" class="flex flex-col text-md left-5 h-16 justify-center leading-5">
                <span class="text-color-text">{{ item.name }}</span>
                <span class="text-color-text-d mt-1">{{ getDesc(item) }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { defineProps,computed } from 'vue';
import { song } from '@/types';
const props = defineProps<{
    songs: song[]
}>()
function getDesc(item:song) {
     return `${item.singer}·${item.album}`
}
</script> 