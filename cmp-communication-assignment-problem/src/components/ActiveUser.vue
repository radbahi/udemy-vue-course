// this component outputs data
<template>
  <section>
    <!-- and this is how we pull the props into the template -->
    <h2>{{ username }}</h2>
    <h3>{{ userage }} Years</h3>
  </section>
</template>

<script>
export default {
  //typestring style of taking in props
  props: {
    username: { type: String, required: true },
    userage: { type: Number, required: true },
  },
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>
