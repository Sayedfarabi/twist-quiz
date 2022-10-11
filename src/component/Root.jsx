import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
export const QuizTopicContext = createContext([]);


const Root = () => {
    const quizTopics = useLoaderData();
    console.log(quizTopics);
    return (
        <QuizTopicContext.Provider value={quizTopics}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizTopicContext.Provider>
    );
};

export default Root;