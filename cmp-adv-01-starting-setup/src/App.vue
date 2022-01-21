<template>
  <div>
    <!-- you can write components pascal cased or camel cased, so either <TheHeader /> or <the-header /> works -->
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- above is a dynamic component. this is a good way to set toggleable components. -->
    <!-- keep-alive is used to preserve an otherwise destroyed component's state, so if we toggle between the two, an input field's info wouldnt be lost for example-->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    //this is how to register local components.
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
/* strangely enough, styles defined in ANY component are GLOBAL, even if not in app component */
/* if you do NOT want that to happen, and only have the style tag of a component apply to that one, use <style scoped/> */
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
