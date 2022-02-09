export default {
  increment(state) {
    state.counter = state.counter + 2;
  },
  //the second argument for a mutation can be anything. i just named this payload. payload is any kind of data being passed into it
  // we do payload.value because the data being passed in this instance is an object and we want to access the value key
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
};
