<template>
    <div ref="rootRef">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults,defineEmits } from 'vue';
import useScroll from './useScroll'
interface pos {
    x:number,
    y:number
}
const props = withDefaults(defineProps < { click?: boolean,probeType?:number } > (), { click: true,probeType:0 })
const rootRef = ref()
const emit = defineEmits<{ (e: 'scroll', pos: pos): void }>()
useScroll(rootRef, props,emit)
</script>
