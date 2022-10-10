import React from 'react';
import QuizOption from '../QuizOPtion/QuizOption';
import './QuizDetils.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const QuizDetils = ({quiz }) => {
    const {correctAnswer, id , question, options} = quiz ;

    const click = (selectAnswer)=>{

        if(selectAnswer === correctAnswer){
            toast("Wow correct answer");
        }
        else(
            toast("Oops Wrong answer")
        )
        
    }
    return (
        <div className='quiz-details'>
            <div>
                <h2>Quiz: {question} </h2>
                <FontAwesomeIcon icon={faCoffee} />
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