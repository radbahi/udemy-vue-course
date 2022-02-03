import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

const app = createApp(App);

//makes vue app aware of this router
app.use(router);

app.mount('#app');
