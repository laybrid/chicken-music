<template>
  <div class="fixed top-[88px] bottom-0 w-[100%]">
    <Scroll class="h-[100%] overflow-hidden">
      <div>
        <div class="relative h-0 pt-[40%]">
          <div class="absolute top-0 bottom-0 right-0 left-0">
            <Slider v-if="data?.sliders?.length" :sliders="data.sliders"></Slider>
          </div>
        </div>
        <div>
          <h2 class="text-color-theme text-md text-center h-[65px] leading-[65px]">热门歌单推荐</h2>
          <ul>
            <li class="flex p-5 pt-0" v-for="item in data?.albums" :key="item.id">
              <div style="flex: 0 0 60px; margin-right: 20px;"><img :src="item.pic" alt="" class="w-[100%]"></div>
              <div class="flex flex-1 flex-col text-md justify-center leading-5">
                <h2 class="text-color-text mb-[10px]">{{ item.username }}</h2>
                <p class="text-color-text-d">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { getRecommend } from '@/service/recommend';
import Slider from '@/components/base/slider/slider.vue';
import Scroll from '@/components/base/scroll/scroll.vue';
import { ref } from 'vue';
import { recommendData, albumsData } from '@/types';
const data = ref<recommendData>()
async function getData() {
  const res = await getRecommend()
  data.value = res
}
getData()
</script>


<style></style>