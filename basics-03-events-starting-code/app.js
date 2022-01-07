const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: "",
      lastName: "",
    };
  },
  watch: {
    //watchers are functions that execute when one of its dependencies changes
    //they are good for things like http requests or timers

    //the watch method below is associated with the data property of the same name
    //because of that, we don't need to strictly define this.counter, we can just use value
    //the 2nd param for a watch method would be the OLD value which we are not using here
    counter(value) {
      if (value > 50) {
        const data = this;
        setTimeout(function () {
          data.counter = 0;
        }, 2000);
      }
    },
  },
  //the computed property contains methods that do not re-execute unless their dependencies changed
  //this is to make your app more performant, otherwise any function execution will re-execute every other function
  //computed properties are good to output values dynamically
  computed: {
    //instructor uses fullname as data property, even though its defined as a method here
    //you SHOULD name your computed properties like you would data properties
    fullname() {
      console.log("Running fullname()");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      console.log("Running outputFullname()");

      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Bahi";
    },
    submitForm() {
      alert("Submitted!");
    },
    // if using $event in html, we now define event here...
    //... like setName(event, param)
    setName(event) {
      this.name = event.target.value;
    },
    // we can intake params, of course
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

//METHODS: Use with event binding OR input binding
//Data binding: Method is executed for every 're-render' cycle of the component
//Use for events or data that really needs to be re-evaluated all the time

//COMPUTED: Use with data binding
//Computed properties are only re-evaluated if one of their 'used values' changes
//Use for data that depends on other data

//WATCHERS: Not used directly in template
//Allows you to run any code in reaction to some changed data, like send http requests
//Use for any non-data update you want to make
