import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {id ,name , logo ,total } = quiz;
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className='card-info'>
                <h3>Quiz Name: {name}</h3>
                <p>Total quiz: {total} </p>
                 <button className='card-btn'> <Link to={`/quiz/${id}`} >Start {name} Quiz</Link> </button>
            </div>
            
        </div>
    );
};

export default Quiz;