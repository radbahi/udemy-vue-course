<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //props being passed in with dashes in their name must be camelCase in the props array here
  //this is so it can be a valid javascript object when calling it in the component
  //now if we wanna refer to the props, we just call it by the variable like name, not props.name or this.name
  //NEVER mutate props within a component. vue uses unidirectional data flow, so data must be changed before its passed in, so like in app
  //   props: ["name", "phoneNumber", "emailAddress"],

  //you can make props an object as well. this is like using typescript with specificed data types
  //lots of different properties like default or validator that u can use. some of them, like default and validator, can even take in functions
  //https://v3.vuejs.org/guide/component-props.html
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: { type: Boolean },
  },
  //the emits property is a quick way to see if there's any emits in this component. good when working in a team
  //can be a simple array or more indepth as an object with custom validator
  emits: ["toggle-favorite"],
  //   emits: {
  //     //this if statement acts as a sort of validator
  //     "toggle-favorite": function (id) {
  //       if (id) {
  //         return true;
  //       } else {
  //         console.warn("Id is missing!");
  //         return false;
  //       }
  //     },
  //   },
  data() {
    //remember to have different names for your props and data
    return {
      detailsAreVisible: false,
      //to change data from a prop, use new data property and save it to new variable and work from there. now u can change it if u want
      nameOfFriend: this.name,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      //$emit makes the parent component listen. 1st argument is just a kebab-case name to assign it. any other argument is whatever data u wanna put
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
