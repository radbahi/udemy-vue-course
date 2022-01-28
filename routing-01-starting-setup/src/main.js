import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
//routing package

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

//exactly like react-router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    //below is a dynamic route. they should ALWAYS be ordered LAST in a similar path
    //everything with the : is a route parameter
    { path: '/teams/:teamId', component: TeamMembers },
    { path: '/users', component: UsersList },
  ],
  //below is how we would rename a css class if we wanted to. by default the dom would render an a tag with a class of "router-link-active"
  linkActiveClass: 'active',
});

const app = createApp(App);

//makes vue app aware of this router
app.use(router);

app.mount('#app');
