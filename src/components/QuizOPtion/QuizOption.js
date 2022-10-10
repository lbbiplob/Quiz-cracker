import React from 'react';
import './QuizOption.css'

const QuizOption = ({option , click, correctAnswer}) => {
    
    return (
           <div  value={option} className='option'>
                <button onClick={(e)=>click(e.target.value)} value={option}>{option}</button>
            </div> 
    );
};

export default QuizOption;