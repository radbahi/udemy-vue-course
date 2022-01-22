<template>
  <!-- teleports wrapped content to body section in dom. not really necessary -->
  <teleport to="body">
    <!-- the div here acts as our backdrop apparently -->
    <div @click="$emit('close')"></div>
    <!-- dialog is mainly used to represent modals, pop-ups, alerts, etc -->
    <!-- this dialog component is built to be totally flexible and global -->
    <dialog open>
      <header>
        <slot name="header">
          <!-- remember that an unnamed slot is considered the default -->
          <h2>{{ title }}</h2></slot
        >
      </header>
      <section><slot></slot></section>
      <menu
        ><slot name="actions">
          <base-button @click="$emit('close')">Close</base-button>
        </slot></menu
      >
    </dialog>
  </teleport>
</template>

<script>
export default {
  // pulling in props typescript-style
  props: { title: { type: String, required: false } },
  emits: ['close'],
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
