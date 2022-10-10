import React from 'react';
import QuizOption from '../QuizOPtion/QuizOption';
import './QuizDetils.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'


const QuizDetils = ({quiz }) => {
    const {correctAnswer, id , question, options} = quiz ;

    const click = (selectAnswer)=>{

        if(selectAnswer === correctAnswer){
            toast.success("Wow correct answer",
            {
                position:'top-center',
                autoClose: 3000,
            }
            );
        }
        else(
            toast("Oops Wrong answer", {
                position:'top-center',
                autoClose: 1000,
            })
        )
        
    }
    const handelCorrectAnswer =() =>{
        toast.success(correctAnswer ,{
                position:'top-center',
    
            })
    }
    return (
        <div className='quiz-details'>
            <div className='quiz-name'>
                <h2>Quiz: {question} </h2>
                <FontAwesomeIcon onClick={handelCorrectAnswer} className='correct-answer-icon' icon={faEye} />
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