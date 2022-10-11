import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'> 
            <div className='blog-item'>
                <h2>How react router works</h2>
                <p>React Router is mainly use for making Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>

            <div className='blog-item'>
                <h2>how does context api works</h2>
                <p>
                    If we wanted to send data from a parent element to a child element, then we would have to send the data through POPS and each step through POPS. It's called  pops dilling. This task has been made easy by Context API. If we want, we can easily send data from any parent element to any child element. Just call the context API with that layer and get the data.
                </p>
            </div>
            <div className='blog-item'>
                <h2>How useRef hook works</h2>
                <p>
                    UseRef is a hook that allows a reference to a DOM element to be created directly in the active element.
                    UseRef Returns a mutable Ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values ​​are accessed from the current property of the returned object. The current property can be initialized to the initial value of the passed argument. The object can maintain a value for a full lifetime of the object.
                </p>
            </div>
        </div>
    );
};

export default Blogs;