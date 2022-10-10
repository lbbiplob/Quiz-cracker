import React from 'react';
import QuizOption from '../QuizOPtion/QuizOption';
import './QuizDetils.css'

const QuizDetils = ({quiz}) => {
    const {correctAnswer, id , question, options} = quiz ;
    const click = (selectAnswer)=>{
        console.log(selectAnswer);
        if(selectAnswer=== correctAnswer){
            console.log('kam hoyce vai ');
        }
    }
    return (
        <div className='quiz-details'>
            <div>
                <h2>Quiz: {question} </h2>
            </div>
            <div className='option-container'>
                {
                    options.map(option => <QuizOption key={option.id} click={click} option={option}></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizDetils;