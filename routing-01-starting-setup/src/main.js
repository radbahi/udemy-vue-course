import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
//routing package

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

//exactly like react-router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    //"alias: '/'"" can also be used below, but doesnt change the url, so either / or /teams will load TeamsList component
    //setting names for routes can help with sending params for bigger apps, so just always do it
    {
      name: 'teams',
      path: '/teams',
      // this is how we can attach multiple components to one route. see App.vue
      components: { default: TeamsList, footer: TeamsFooter },
      //children is how u set up nested routes
      children: [
        //everything with the : is a dyanmic route parameter, and setting props: true uses the params as a prop
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    //beforeEnter works like beforeEach except for a specific route
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users before enter');
        next();
      },
    },
    //this is how we catch invalid paths. the .* is regex. this MUST be the lowest priority route
    { path: '/:notFound(.*)', component: NotFound },
  ],
  //below is how we would rename a css class if we wanted to. by default the dom would render an a tag with a class of "router-link-active"
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      //good for saving position if they press back on browser
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

//this is a navighation guard. this function always gets called when we nav from one page to another
//next is especially good for denying connection if a user is not authed
router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  //calling next() or next(true) confirms the navigation, next(false) denies it. we can also pass a route to direct the user
  //ALWAYS use an if statement like this otherwise there'll be an infinite loop
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

//could be good for sending analytics data
router.afterEach((to, from) => {
  console.log('global afterEach');
  console.log(to, from);
});

const app = createApp(App);

//makes vue app aware of this router
app.use(router);

app.mount('#app');
