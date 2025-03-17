import { computed, Ref, ref } from "vue";
import { singerData } from '@/types';
interface props {
    singers: singerData[]
}
export default function useShortList(props: props, groupRef: Ref) {
    const ANCHOR_HEIGHT = 18
    const scrollRef = ref()
    const shortList = computed(() => {
        return props.singers.map((item) => item.title)
    })
    const touch = { clickIndex: 0, y1: 0, y2: 0 }
    function onStart(e: TouchEvent) {
        if (e.target) {
            const dom = e.target as HTMLLIElement
            const clickIndex = parseInt(dom.dataset.index as string)
            touch.clickIndex = clickIndex
            touch.y1 = e.touches[0].pageY
            scrollTo(clickIndex)
        }

    }
    function onMove(e: TouchEvent) {
        touch.y2 = e.touches[0].pageY
        const delta = (touch.y2 - touch.y1) / ANCHOR_HEIGHT | 0
        const index = touch.clickIndex + delta
        scrollTo(index)
    }
    function scrollTo(index: number) {
        if(isNaN(index)) {
            return
        }
        // index值不能随便拖 所以做一个限定
        index = Math.max(0, Math.min(shortList.value.length - 1, index));
        const targetElm = groupRef.value.children[index]
        const scroll = scrollRef.value.scroll
        scroll.scrollToElement(targetElm)
    }
    return {
        shortList,
        onStart,
        onMove,
        scrollRef
    }
}