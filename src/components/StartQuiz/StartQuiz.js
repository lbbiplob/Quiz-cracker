import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetils from '../QuizDetils/QuizDetils';
import './StartQuiz.css'

const StartQuiz = () => {
    const start = useLoaderData();
    const startQuizes = start.data.questions;
    console.log(startQuizes);
    return (
        <div className='quiz-container'>
            {
                startQuizes.map( quiz => <QuizDetils key={ quiz.correctAnswer} quiz={quiz} ></QuizDetils>)
            }
           
        </div>
    );
};

export default StartQuiz;