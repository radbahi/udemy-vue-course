<template>
  <h3>{{ counter }}</h3>
  <p>we do more</p>
</template>

<script>
export default {
  // $store is how we access the vuex store
  // we can pull global state into our computed property and then just use it from there
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
