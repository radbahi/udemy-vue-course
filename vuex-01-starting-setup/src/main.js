import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';

const app = createApp(App);

//now we use it
app.use(store);

app.mount('#app');
