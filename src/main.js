import 'bootstrap/dist/css/bootstrap.min.css'

import './config'

import {createApp, markRaw} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.min.js'
