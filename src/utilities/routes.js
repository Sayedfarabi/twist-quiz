import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/blog/Blog";
import Home from "../component/home/Home";
import Quiz from "../component/quiz/Quiz";
import Root from "../component/Root";
import Statistics from "../component/statistics/Statistics";
import ErrorPage from "../component/errorPage/ErrorPage";
import { storeDataAndTopicData } from "./getStoreData&TopicData";
import Topics from "../component/topic-item/Topic";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: storeDataAndTopicData,
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
            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => await fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <Quiz></Quiz>
            },

        ]
    }

])
export default router