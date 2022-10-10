import React from 'react';
import QuizOption from '../QuizOPtion/QuizOption';
import './QuizDetils.css';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizDetils = ({quiz }) => {
    const {correctAnswer, id , question, options} = quiz ;

    console.log(quiz.id);
    const click = (selectAnswer)=>{

        if(selectAnswer === correctAnswer){
            toast("Wow correct answer");
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
                    options.map(option => <QuizOption key={id} click={click} correctAnswer={correctAnswer} option={option}></QuizOption>)
                }
            </div>
            <ToastContainer />
        </div>
        
    );
};

export default QuizDetils;