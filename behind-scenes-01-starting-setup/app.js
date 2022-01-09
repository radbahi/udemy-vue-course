const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this now grabs whatever is in the input without needing to log every input
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    //this is the first step in a vue lifecycle
    console.log("beforeCreate()");
  },
  created() {
    //second step in vue lifecycle
    console.log("created()");
  },
  beforeMount() {
    //third step
    console.log("beforeMount()");
  },
  mounted() {
    //4th
    console.log("mounted()");
  },
  beforeUpdate() {
    //lifecycle method before an update to the dom
    console.log("beforeUpdate()");
  },
  updated() {
    //lifecycle method after an update to the dom
    console.log("updated()");
  },
  beforeUnmount() {
    //before an app gets unmounted
    console.log("beforeUnmount()");
  },
  unmounted() {
    //after app is unmounted
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 3000);

let message = "Hello!";

let longMessage = message + " World!";

// console.log(longMessage);

//vue is reactive. js is not. thats why 'Hello!!!!' is not logged
message = "Hello!!!!";

// console.log(longMessage);

//Javascript proxies https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//These are what's used for Vue and JS to communicate

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
    // console.log(target);
    // console.log(key);
    // console.log(value);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!";

// console.log(proxy.longMessage);

//you'll notice that the data object, the message key, and Hello!!!! was logged, lines 45-47
//proxy.message's value was changed from Hello! to Hello!!!! on line 44
//this is p much how vue works in the background

//you can set up multiple vue apps in one html page, each pointing to different sections
//obv u cant use the same data from another vue app in your 2nd one
//each html section mounted in vue are called 'templates'

const fakeApp = Vue.createApp({
  //this is how a template works. obv much better to just use regular html
  template: `
    <p>fake html</p>
  `,
  data() {
    return {
      fakeData: "fake data",
    };
  },
}).mount("fake-app");

//vue uses the virtual dom just like react https://blog.logrocket.com/how-the-virtual-dom-works-in-vue-js/
//vue instance lifecycle https://vuejs.org/v2/guide/instance.html
