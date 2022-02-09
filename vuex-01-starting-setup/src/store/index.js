//just like redux
import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';

//how to set up global state
const store = createStore({
  modules: {
    //below are the names assigned as keys to namespaced modules
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  //mutations are a way to have a global method to update state. state is auto provided as an argument.
  //mutations MUST be synchronous. no async whatsoever. use actions for async.
  mutations: rootMutations,
  //actions are how we work with async functions like checking out a shopping cart. then we call commit on whatever
  //NEVER change state in anywhere else besides mutations
  actions: rootActions,
  //getters are a way to manipulate stored data, but not changing that data. good for things like filtering
  getters: rootGetters,
});

export default store;
