<template>
  <!-- this is gonna be used a lot, so its global -->
  <!-- class is a css class. we're also using type as a fallthrough prop for button-->
  <button :class="mode">
    <!-- slot needs to be passed INSIDE the button here -->
    <slot></slot>
  </button>
  <!-- we need a slot here to pass in the text from outside. a slot would be better than props here incase u want to add something like an svg icon -->
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
/* literally no idea why the styling is messed up. this has happened before. */
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
