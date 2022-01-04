Vue.createApp({
  //below is a property named data which has a function as a value
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  //   the methods key below takes in functions that we can call in html
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
//mount lets the createApp know what to use with vue, in this case being a div with an id of app. the # is the id selector.

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
