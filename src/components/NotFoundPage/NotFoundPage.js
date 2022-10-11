import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
      
            <div className='four-zero-four'>
                <h1>4<span>o</span>4</h1>
                <p className='error-massage'>This page Not Found</p> 
                <Link to={'/'}><button className='error-btn'>Back to Home Page</button></Link>
            
            </div>
            
        
    );
};

export default NotFoundPage;