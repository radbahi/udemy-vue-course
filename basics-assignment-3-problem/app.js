Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    result(value) {
      const data = this;
      setTimeout(function () {
        value = "Not there yet";
        data.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter > 37) {
        return "Too much!";
      } else if (this.counter < 37) {
        return "Not there yet";
      } else {
        this.counter;
      }
    },
  },
  methods: {
    add(num) {
      console.log(num);
      this.counter = this.counter + num;
    },
  },
}).mount("#assignment");
