// this component takes in the data
<template>
  <section>
    <!-- and prevent default, use submit to run submitData method in the export default -->
    <form @submit.prevent="submitData">
      <!-- remember to use v-model to associate the data with the inputs -->
      <input type="text" placeholder="Your name" v-model="enteredName" /><input
        type="text"
        placeholder="Your age"
        v-model="enteredAge"
      />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  //this emits is just a quick way to see what is getting emitted exactly
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      //remember that emit is used to let parent components take data from this component, also pass in the data as arguments
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
