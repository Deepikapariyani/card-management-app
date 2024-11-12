import { createApp } from 'vue'
import { createPinia } from 'pinia';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.vue'
import './css/main.css';
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
createApp(App).mount('#app')
