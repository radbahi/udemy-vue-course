const app = Vue.createApp({
  data() {
    return {
      //   detailsAreVisible: false, NOT NEEDED HERE SINCE WE USING COMPONENTS
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    // toggleDetails() { NOT NEEDED HERE SINCE WE USING COMPONENTS
    //   this.detailsAreVisible = !this.detailsAreVisible;
    // },
  },
});

//using a dash in the name will help prevent clashing with html elements
app.component("friend-contact", {
  //components are essentially mini apps
  //templates are needed for components
  template: `
  <li>
  <h2>{{friend.name}}</h2>
  <button @click="toggleDetails">
    {{detailsAreVisible ? 'Hide details' : 'Show details'}}
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
</li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
