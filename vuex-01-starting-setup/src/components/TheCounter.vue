<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // $store is how we access the vuex store
  // we can pull global state into our computed property and then just use it from there
  computed: {
    // counter() {
    //   // this is now pulling in the getter
    //   return this.$store.getters.finalCounter;
    // },
    //below is a more convenient way of getting getters from a namespaced module. good for needing multiple getters
    ...mapGetters('numbers', ['finalCounter']),

    // //below is how we would replace the default names with our own if we wanted
    // ...mapGetters({theFinalCount: 'finalCounter'})
  },
};
</script>
