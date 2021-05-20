import About from "./pages/About";
import Forms from "./pages/Forms";
import Index from "./pages/Index";

export const  routes = [
    {
        path: "/",
        isExact: true,
        component: Index
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/forms",
        component: Forms
    },
]

