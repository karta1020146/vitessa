import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {defineAsyncComponent} from 'vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
app.component('slideComp', defineAsyncComponent(() => import("slide/slide")
))