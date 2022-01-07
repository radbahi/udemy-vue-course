Vue.createApp({
  data() {
    return { tasks: [], taskInput: "", showList: true };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
}).mount("#assignment");
