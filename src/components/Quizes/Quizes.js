import React, { useContext } from 'react';
import { QuizContext } from '../../Layouts/Layouts';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'

const Quizes = () => {
    const quizes = useContext(QuizContext)

    return (
        <div className='card-container'>
           {
            quizes.map (quiz => <Quiz key={quiz.id} quiz={quiz}  ></Quiz>)
           }
        </div>
    );
};

export default Quizes;