<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 bg-color-background z-10">
    <MusicList v-if="songsRef && pic && title" :songs="songsRef" :pic="pic" :title="title"></MusicList>
  </div>
</template>

<script setup lang='ts'>
import { getSingerDetail } from '@/service/singer';
import { processSongs } from '@/service/song';
import { defineProps, ref, computed } from 'vue';
import { singer, song } from '@/types';
import MusicList from '../components/music-list/music-list.vue'
const props = defineProps<{ singer: singer }>()
const songsRef = ref<song[]>()
const pic = computed(() => props.singer.pic)
const title = computed(() => props.singer.name)
async function getData() {
  const result = await getSingerDetail(props.singer)
  const songs = await processSongs(result.songs)
  console.log(songs)
  songsRef.value = songs
}
getData()
</script>