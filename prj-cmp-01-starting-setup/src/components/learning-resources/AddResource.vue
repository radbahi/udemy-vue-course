<template>
  <!-- @close is being emitted from BaseDialog to run confirmError here. this is to close the box when clicking the backdrop -->
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError"
    ><template #default
      ><p>INVALID INPUT!!!!!</p>
      <p>CHECK IT AGAIN DUMMY</p></template
    ><template #actions
      ><base-button @click="confirmError">Okay</base-button></template
    ></base-dialog
  >
  <base-card
    ><form @submit.prevent="submitData">
      <div>
        <label for="title">Title</label
        ><input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div>
        <label for="description">Description</label
        ><textarea
          rows="3"
          id="description"
          name="description"
          ref="descInput"
        />
      </div>
      <div>
        <label for="link">Link</label
        ><input type="url" id="link" name="link" ref="linkInput" />
      </div>
      <div><base-button type="submit">Add Resource</base-button></div>
    </form></base-card
  >
</template>

<script>
export default {
  //injecting addResource method from TheResources to add new data stored in TheResources
  inject: ['addResource'],
  data() {
    return { inputIsInvalid: false };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
