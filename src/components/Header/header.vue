<template>
    <div class="h-11 flex items-center justify-center">
        <div class="logo"></div>
        <h1 class="text-color-theme text-lg">Chicken Music</h1>
        <div class="absolute right-0 p-3">
            <UserIcon class="size-7 text-color-theme"></UserIcon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { UserIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.logo {
    width: 30px;
    height: 32px;
    background-image: url('./logo@3x.png');
    background-size: 30px 32px ;
    margin-right: 9px;
}
</style>