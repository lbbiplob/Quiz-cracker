import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h2>Front-End Quiz </h2>
            </div>
            <div className='navbar'>
                <Link to={'home'}>Home</Link>
                <Link to={'quiz'}>Quiz</Link>
                <Link to={'statistics'}>Statistics</Link>
                <Link to={'blog'}>Blog</Link>
            </div>
        </div>
    );
};

export default Header;