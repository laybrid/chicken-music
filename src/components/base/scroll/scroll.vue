<template>
    <div ref="rootRef">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue';
import useScroll from './useScroll'
const props = withDefaults(defineProps < { click?: boolean } > (), { click: true })
const rootRef = ref()
useScroll(rootRef, props)
</script>
