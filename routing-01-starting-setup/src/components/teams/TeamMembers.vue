<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  //users and teams being provided by app.vue
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    //simply going to a different route doesn't change params so we need to actually grab the route object like below
    this.loadTeamMembers(this.teamId);
    //this.$route.query is how we pull queries exactly. theyre NOT passed as props
    console.log(this.$route.query, this.sort);
  },
  //we use below if we wanna do something when this component is going to be reused with new data bcuz the route changed
  //this can work as an alternative to watch, but we wanna use props instead of route params to make this component more flexible
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers Cmp beforeRouteUpdate');
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId);
    next();
  },
  watch: {
    //when going to a new route though, the data behind it still changes, so we can set a watch to run this method when it does
    teamId(newId) {
      if (newId) {
        this.loadTeamMembers(newId);
      }
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
