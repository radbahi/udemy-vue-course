export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    //idk why we have to do this when we could maybe just check boolean of above in component?
    return state.coaches && state.coaches.length > 0;
  },
};
