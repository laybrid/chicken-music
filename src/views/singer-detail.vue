<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 bg-color-background z-10">
    <MusicList v-if="songsRef && pic && title" :songs="songsRef" :pic="pic" :title="title"></MusicList>
  </div>
</template>

<script setup lang='ts'>
import { getSingerDetail } from '@/service/singer';
import { processSongs } from '@/service/song';
import { defineProps, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { singer, song } from '@/types';
import MusicList from '../components/music-list/music-list.vue'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/utils/constant';
const props = defineProps<{ singer: singer }>()
const route = useRoute()
const router = useRouter()
const songsRef = ref<song[]>()
const computedSinger = computed(() => {
  const cacheSinger = storage.session.get(SINGER_KEY)
  if (!props.singer && cacheSinger && cacheSinger.mid === route.params.id) {
    return cacheSinger
  }
  console.log(cacheSinger.mid)
  return props.singer
})
const pic = computed(() => computedSinger.value && computedSinger.value.pic)
const title = computed(() => computedSinger.value && computedSinger.value.name)
async function getData() {
  if (!computedSinger.value) {
    const path = route.matched[0].path
    router.push({path})
    return
  }
  const result = await getSingerDetail(computedSinger.value)
  const songs = await processSongs(result.songs)
  console.log(songs)
  songsRef.value = songs
}
getData()
</script>