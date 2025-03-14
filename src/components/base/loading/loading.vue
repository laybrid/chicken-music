<template>
    <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div class="text-center">
            <img src="./loading.gif"  width="24" height="24">
            <p class="leading-5 text-sm text-color-text-l">{{title}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,defineExpose } from 'vue';
const title = ref('')
function setTitle(newTitle:string) {
    title.value = newTitle
}
defineExpose({setTitle})
</script>
