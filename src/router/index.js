import { createApp } from "vue";
import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingSection from "@/components/LandingSection.vue";
import Menu from "@/views/Menu.vue";
import Location from "@/views/Location.vue";
import OurStory from "@/views/OurStory.vue";

const app = createApp(App);



const routes = [
    {
        path: "/",
        name: "Home",
        component: LandingSection,
    },
      {
        path: "/menu",
        name: "Menu",
        component: Menu,
    },
      {
        path: "/OurStory",
        name: "OurStory",
        component: OurStory,
    },
      {
        path: "/location",
        name: "Location",
        component: Location,
    },

];

const router = new createRouter({
    mode: "history",
    history: createWebHistory(),
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});
app.use(router);
export default router;
