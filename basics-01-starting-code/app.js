const app = Vue.createApp({
  //remember we can make a function directly like this
  //that value stored in the data property is a function
  data() {
    //an object is ALWAYS returned
    //then we do any key-value pair we wanna define
    return {
      courseGoalA: "courseGoalA Finish the course and learn Vue!",
      courseGoalB: "courseGoalB Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  //methods allow u to define functions to call
  //methods is filled with functions itself
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        //when using vue, "this" works differently than in javascript
        //vue takes everything in data and methods and make it global
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
//mount always takes in a selector
//IDs are best as they should always be unique
//remember that we use # to point that its an ID
app.mount("#user-goal");

//vue uses a declarative approach
//we define the template, or the end goal
