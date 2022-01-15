<template>
  <div>
    <!-- remember that the : points to the data specifically in the export default -->
    <active-user :username="user.name" :userage="user.age"></active-user>
    <!-- user-data is emitting data named set-data which we get from the arguments -->
    <!-- the setUserData method in here gets that data being emitted -->
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  //we choose App to handle the data because it's a parent to both ActiveUser and UserData and they can't communicate with each other
  data() {
    return {
      user: {
        name: "Radouane Bahi",
        age: 26,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      //the + in front of age turns it into a number type instead of string. not really needed, but neat little trick
      this.user = { name: name, age: +age };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
