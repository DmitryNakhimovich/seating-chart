import "vuestic-ui/dist/vuestic-ui.css";
import "@/styles/styles.scss";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import App from "@/App.vue";
import { DraggablePlugin } from "@braks/revue-draggable";
import { VuesticPlugin } from "vuestic-ui";

createApp(App)
  .use(store)
  .use(vuetify)
  .use(VuesticPlugin, {
    colors: {
      primary: "#8BDCD5",
      secondary: "#002c85",
    },
  })
  .use(DraggablePlugin)
  .mount("#app");
