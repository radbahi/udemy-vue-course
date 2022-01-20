<template>
  <div>
    <!-- you can write components pascal cased or camel cased, so either <TheHeader /> or <the-header /> works -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals
      ><template #default="slotProps"
        ><h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["another-prop"] }}</p></template
      ></course-goals
    >
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: {
    //this is how to register local components.
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
