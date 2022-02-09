<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   //$store.commit is how we call the global method in mutations to update state
    //   //$store.dispatch is how we call an action, which may be preferred if we're doing something asynchronous with the state
    //   this.$store.dispatch('increment');
    // },
    //below is a more convenient way of getting actions from a namespaced module. good for needing multiple actions
    //remember to pass in arguments in template if needed
    ...mapActions('numbers', ['increment', 'increase']),

    // //below is how we would replace the default names with our own if we wanted
    // ...mapActions({inc: 'increment', addMore: 'increase'})
  },
};
</script>
