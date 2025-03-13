<template>
    <div class="h-11 flex">
        <router-link v-for="(item,index) in tabs" :key="index" :to="item.path" class="flex-1 text-center ">
            <span class="pb-[5px] leading-[44px] text-color-text-l text-md">{{ item.name }}</span>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
const tabs = [
    {
        name: '推荐',
        path: '/recommend'
    },
    {
        name: '歌手',
        path: '/singer'
    },
    {
        name: '排行',
        path: '/top-list'
    },
]
</script>

<style scoped>
.router-link-active span{
    color: #ffcd32;
    border-bottom: 2px solid #ffcd32;
}
</style>