import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(69);
    const increaseSteps = () =>{
        const newSteps = steps +1;
        setSteps(newSteps);
    }

    useEffect(()=>{
        console.log(steps)
    },[steps]);

    return (
        <div style={{border: '2px solid red', margin: '10px', padding: '50px', borderRadius: '5px' }}>
            <h2>This is my watch</h2>
            <p>Steps: {steps} </p>
            <button onClick={increaseSteps}>Button</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;