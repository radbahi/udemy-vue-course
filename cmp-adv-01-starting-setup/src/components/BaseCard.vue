<template>
  <!-- using slot is how we turn this component into a wrapper component and display the content wrapped inside it  -->
  <!-- we can use multiple slots in a component. only one unnamed slot can exist, which would be the default slot -->
  <div>
    <header v-if="$slots.header">
      <!-- using the if statement here makes sure that the header doesnt render if no info is passed into the slot -->
      <slot name="header"
        ><h2>
          Anything in between the slot tags is default. This h2 would render if
          no content was passed in.
        </h2></slot
      >
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    //logs the slot data
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
/* not sure why it isnt working */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
