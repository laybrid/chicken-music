import BScroll from "@better-scroll/core";
import ObserveDOM from '@better-scroll/observe-dom'
import { ref, onMounted, onUnmounted, onActivated, onDeactivated, Ref } from 'vue';

BScroll.use(ObserveDOM)
interface props {
    click:boolean
}
export default function useScroll(wrapperRef:Ref, props:props) {
    const scroll = ref()
    onMounted(() => {
        const scrollVal = scroll.value = new BScroll(wrapperRef.value, {
            observeDOM: true,
            ...props
        });
        // if (props.probeType > 0) {
        //     scrollVal.on('scroll', (pos) => {
        //         emit('scroll', pos)
        //     })
        // }
    })
    onUnmounted(() => {
        scroll.value.destroy();
    })
    onActivated(() => {
        scroll.value.enable()
        scroll.value.refresh()
    })

    onDeactivated(() => {
        scroll.value.disable()
    })
    return {
        scroll
    }
}