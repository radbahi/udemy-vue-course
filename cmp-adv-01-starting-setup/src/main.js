import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

// these don't need to be a global component since theyre only used once...
// import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";

const app = createApp(App);

//using the component method on app turns these into global components, they can go anywhere in ur app
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

// these r now being used in just App.vue
// app.component("the-header", TheHeader);
// app.component("badge-list", BadgeList);
// app.component("user-info", UserInfo);

app.mount("#app");
