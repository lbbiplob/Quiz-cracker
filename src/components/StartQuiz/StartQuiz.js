import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetils from '../QuizDetils/QuizDetils';
import './StartQuiz.css'

const StartQuiz = () => {
    const start = useLoaderData();
    const {id, name, questions }= start.data; 
    console.log(start);
    return (
        <div className='quiz-container'>
            <h1>{name}</h1>
            {
                questions.map( quiz => <QuizDetils key={id} name={name} quiz={quiz} ></QuizDetils>)
            }
           
        </div>
    );
};

export default StartQuiz;