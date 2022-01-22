// since this component is gonna be used a lot, we made it global // the base
card is going to be used as a wrapper around any content we want, so we use
slots
<template>
  <div>
    <!-- now we can pass any markup of our choice into the slot -->
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
