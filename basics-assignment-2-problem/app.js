Vue.createApp({
  data() {
    return { userInput: "", confirmedInput: "" };
  },
  methods: {
    alertClick() {
      alert("!");
    },
    saveInput(e) {
      this.userInput = e.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
}).mount("#assignment");
