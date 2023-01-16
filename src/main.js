import { createApp } from "vue";
import App from "./App.vue";
import About from "./About.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

const about = createApp(About);
about.use(createPinia());
about.use(router);
about.mount("#about");
