import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/blog/Blog";
import Topics from "../component/head/topic/Topic";
import Home from "../component/home/Home";
// import { getTopicsData } from "../component/loaders/loaders";
import Root from "../component/Root";
import Statistics from "../component/statistics/Statistics";
import ErrorPage from "./errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/topic',
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

        ]
    }

])
export default router