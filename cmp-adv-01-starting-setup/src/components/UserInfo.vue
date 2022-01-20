<template>
  <section>
    <!-- base-card is a custom wrapper component we use to duplicate styling -->
    <base-card>
      <!-- using a template wrap with a v-slot directive named after a slot within the slot component is how you assign content to that slot -->
      <!-- #header is a shorthand for v-slot: -->
      <template v-slot:header>
        <div>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </div>
      </template>
      <!-- v-slot:default isn't needed to point to the default template, just makes labeling more explicit -->
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
