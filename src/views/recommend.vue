<template>
  <div>
    <div class="relative h-0 pt-[40%]">
      <div class="absolute top-0 bottom-0 right-0 left-0">
        <Slider v-if="data?.sliders?.length" :sliders="data.sliders"></Slider>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRecommend } from '@/service/recommend';
import Slider from '@/components/base/slider/slider.vue';
import { ref } from 'vue';
import { recommendData } from '@/types';
const data = ref<recommendData>()
async function getData() {
  const res = await getRecommend()
  data.value = res
}
getData()
</script>


<style></style>