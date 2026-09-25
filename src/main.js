import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from "@iconify/vue";
import './assets/styles/main.scss';
createApp(App).component('Icon', Icon).mount('#app')
