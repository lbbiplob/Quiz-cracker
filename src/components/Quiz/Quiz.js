import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name , logo ,total } = quiz;
    console.log(quiz);
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className='card-info'>
                <h3>Quiz Name: {name}</h3>
                <p>Total quiz: {total} </p>
                 <button className='card-btn'>Start {name} Quiz</button>
            </div>
            
        </div>
    );
};

export default Quiz;