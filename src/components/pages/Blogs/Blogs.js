import React from 'react';
import h1 from "../../../images/hook1.png";
import h2 from "../../../images/hook2.png";
import h3 from "../../../images/hook3.png";
import h4 from "../../../images/hook4.png";

const Blogs = () => {
    return (
    <>
    <div style={{overflowX:"hidden"}}></div>
        <div className="bg-dark" style={{ paddingTop: "50px" }}>
            <h2 className="p-4 text-danger text-center">React Hooks</h2>
            <hr />
           <div className='text-light p-4'>
           <p>Hooks allow to "hook" into React features such as state and lifecycle methods. It generally replaces class components and does not work in class components. i.e.</p>
            <img src={h1} alt="" className="img-fluid" />
 
<p>* You must import Hooks from react.

Hook Rules
There are three rules for hooks:
Hooks can only be called inside React function components.
It can only be called at the top level of a component.
It can’t be conditional
React useState Hook
The React useState Hook allows tracking state in a function component. The state generally refers to data or properties that need to be tracked in an application.
Import useState
At the top of our component, import the useState Hook.

import useState from "react";

Initialize useState
initialize state by calling useState in  function component. useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

<img src={h2} alt="" className="img-fluid" />

<p> book is the current state.
setBook is the function that is used to update our state.
Read State
We can include our state anywhere in our component.</p>
<img src={h3} alt="" className="img-fluid" />

<p>Output: My favorite book is Harry potter

Update State
To update our state, we use our state updater function.
We should never directly update the state. Ex: book = "Harry Potter" is not allowed. </p>

<img src={h4} alt="" className="img-fluid" />
        
        </p>
           </div>
           {/* <div className='text-light p-4'>
<h1>React useEffect Hooks</h1>
<p>The useEffect Hook allows performing side effects in components.
useEffect accepts two arguments. The second argument is optional.
useEffect(function, dependency)
</p>

           </div> */}
           </div>
   </> );
};

export default Blogs;