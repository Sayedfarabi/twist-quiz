import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
export const QuizTopicContext = createContext([]);
export const StoreDataContext = createContext([]);



const Root = () => {
    const { topic, storeData } = useLoaderData();
    // console.log(storeData);
    return (
        <QuizTopicContext.Provider value={topic}>
            <StoreDataContext.Provider value={storeData}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </StoreDataContext.Provider>
        </QuizTopicContext.Provider>
    );
};

export default Root;