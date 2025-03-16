import { nextTick, ref, watch, computed } from "vue"
import { singerData } from '@/types';
interface props {
    singers: singerData[]
}
interface pos {
    x: number,
    y: number
}
export default function useFixed(props: props) {
    const groupRef = ref()
    const listHeights = ref<number[]>([])
    const scrollY = ref(0)
    const currentIndex = ref(0)
    const fixedTitle = computed(() => {
        if (scrollY.value < 0) {
            return ''
        }
        return props.singers[currentIndex.value].title
    })
    watch(() => props.singers, async () => {
        await nextTick()
        calculate()
    },{immediate:true})
    watch(scrollY, (newY) => {
        const listHeightsVal = listHeights.value
        for (let i = 0; i < listHeightsVal.length - 1; i++) {
            const top = listHeightsVal[i]
            const bottom = listHeightsVal[i + 1]
            if (newY >= top && newY <= bottom) {
                currentIndex.value = i
            }
        }
    })
    function calculate() {
        const list = groupRef.value.children
        const listHeightsVal = listHeights.value
        listHeightsVal.length = 0
        let height = 0
        listHeightsVal.push(height)
        for (let i = 0; i < list.length; i++) {
            height += list[i].clientHeight
            listHeightsVal.push(height)
        }
    }
    function onScroll(pos: pos) {
        scrollY.value = -pos.y
    }
    return {
        groupRef,
        onScroll,
        fixedTitle
    }
}