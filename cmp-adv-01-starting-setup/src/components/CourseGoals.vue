<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- scoped slots like below allow you to customize markup passed in from parent -->
      <!-- named props like item in below can now be customized in the parent component -->
      <slot :item="goal" another-prop="why isnt this working"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
