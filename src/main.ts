import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'
import './assets/css/tailwind.css'
import loadingDirective from './components/base/loading/directive'
createApp(App).use(router).use(lazyPlugin,{
    loading:require('@/components/Header/logo@2x.png')
}).directive('loading',loadingDirective).mount('#app')
