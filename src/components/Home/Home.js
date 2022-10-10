import React from 'react';
import Quizes from '../Quizes/Quizes';
import Homephoto from '../../images/Home-photo.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-banner'>
                <div>
                    <h2> This is Front-end Quiz site </h2>
                    <p>
                        This test will allow to assess your knowledge in React, CSS, git and JavaScript.
                        Topics: React router and Context , CSS properties and selectors, JavaScript syntax, events and operators.
                    </p>
                </div>
                <img src={Homephoto} alt="" />
            </div>
            <div>
                <Quizes></Quizes>
            </div>
        </div>
    );
};

export default Home;