import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// this method lets us know when the router evaluates which page should be loaded
router.isReady().then(() => {
  //now the app only mounts once the router is fully set up and aware of the page that should be loaded
  //we do this to stop route animations for playing when loading a page for the first time and not switching
  app.mount('#app');
});
