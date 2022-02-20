export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    //idk why we have to do this when we could maybe just check boolean of above in component?
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    //some returns true if some coach fills a criteria
    return coaches.some((coach) => coach.id === userId);
  },
};
