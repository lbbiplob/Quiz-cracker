import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetils from '../QuizDetils/QuizDetils';
import './StartQuiz.css'

const StartQuiz = () => {
    const start = useLoaderData();
    const {id, name, questions }= start.data; 
    return (
        <div className='quiz-container'>
            <h1>Quiz of {name}</h1>
            {
                questions.map( (quiz , index ) =>{
                    index= index +1 ;
                return <QuizDetils key={id}  quiz={quiz} index={index}
                 ></QuizDetils>})
            }
           
        </div>
    );
};

export default StartQuiz;