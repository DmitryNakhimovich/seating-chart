import "@/styles/styles.scss";
import "bootstrap";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import App from "@/App.vue";
import { DraggablePlugin } from "@braks/revue-draggable";
import PanZoomPlugin from "vue-panzoom/src/main";
import Multiselect from "@vueform/multiselect";

createApp(App)
  .use(store)
  .use(vuetify)
  .component("va-select", Multiselect)
  .use(DraggablePlugin)
  .use(PanZoomPlugin)
  .mount("#app");
