import { createApp } from 'vue';
//just like redux
import { createStore } from 'vuex';

import App from './App.vue';

//how to set up global state
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  //mutations are a way to have a global method to update state. state is auto provided as an argument.
  //mutations MUST be synchronous. no async whatsoever. use actions for async.
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    //the second argument for a mutation can be anything. i just named this payload. payload is any kind of data being passed into it
    // we do payload.value because the data being passed in this instance is an object and we want to access the value key
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  //actions are how we work with async functions like checking out a shopping cart. then we call commit on whatever
  //NEVER change state in anywhere else besides mutations
  actions: {
    increment(context) {
      //context is an object auto provided by vuex
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  //getters are a way to manipulate stored data, but not changing that data. good for things like filtering
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    //the 2nd argument for getters is a value holding all the getters so we can manipulate them too
    //using _ is a way to skip over an unused argument without getting an error so we can access the other arguments
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

//now we use it
app.use(store);

app.mount('#app');
