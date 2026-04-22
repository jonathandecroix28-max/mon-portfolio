import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

import Contact from "../views/ContactView.vue";
import Projects from "../views/ProjectsView.vue";
import About from "../views/AboutView.vue";
import Error404 from "../views/Error404View.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home

    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: Error404
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;