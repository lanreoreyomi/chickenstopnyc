import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import VueScrollTo from "vue-scrollto";
import "aos/dist/aos.css";
// import VueMeta from "vue-3-meta";
import { createApp } from "vue";

const app = createApp(App);


AOS.init({
    offset: 80,
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease" // default easing for AOS animations
});


// app.use(Meta);
app.config.productionTip = false;

// app.use( {
//   // optional pluginOptions
//   refreshOnceOnNavigation: true
// })

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
//

createApp(App)
    .use(VueScrollTo)
    .use(router)
    .use(AOS)
    .mount("#app");