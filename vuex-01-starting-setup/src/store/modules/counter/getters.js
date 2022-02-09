export default {
  testAuth(state) {
    //there are also rootState and rootGetters params are how we access the global state in any module
    return state.isLoggedIn;
  },
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
};
