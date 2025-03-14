import BScroll from "@better-scroll/core";
import Slide from '@better-scroll/slide';
import { onMounted, onUnmounted, ref, onActivated, onDeactivated, Ref } from 'vue'
BScroll.use(Slide);

export default function useSlider(wrapperRef: Ref) {

    const slider = ref();
    const currentPageIndex = ref(0)
    onMounted(() => {
        const sliderVal = slider.value = new BScroll(wrapperRef.value, {
            click: true,
            scrollX: true,
            scrollY: false,
            momentum: false,
            bounce: false,
            probeType: 2,
            slide: true
        })
        sliderVal.on('slideWillChange', (page: MouseEvent) => {
            currentPageIndex.value = page.pageX
        })
    })
    onUnmounted(() => {
        slider.value && slider.value.destroy();
    })
    onActivated(() => {
        slider.value && slider.value.enable()
        slider.value && slider.value.refresh()
    })

    onDeactivated(() => {
        slider.value && slider.value.disable()
    })
    return {
        currentPageIndex,
        slider
    }
}
