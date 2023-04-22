import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(69);
    const increaseSteps = () =>{
        const newSteps = steps +1;
        setSteps(newSteps);
    }
    return (
        <div>
            <h2>This is my watch</h2>
            <p>Steps: {steps} </p>
            <button onClick={increaseSteps}>Button</button>
        </div>
    );
};

export default Watch;