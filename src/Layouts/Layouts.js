import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';


export const QuizContext = createContext('quizs') 

const Layouts = () => {
    const quiz = useLoaderData();
    const quizs = quiz.data;
    
    return (
     <QuizContext.Provider value={quizs} >
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
     </QuizContext.Provider>
    );
};

export default Layouts;