Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  //this is how to dynamically assign classes
  //   computed: {
  //     boxAClasses() {
  //       return { active: this.boxASelected };
  //     },
  //     boxBClasses() {
  //       return { active: this.boxBSelected };
  //     },
  //     boxCClasses() {
  //       return { active: this.boxCSelected };
  //     },
  //   },
  //the expressions below determine if active will be evaluated as true or false
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
}).mount("#styling");
