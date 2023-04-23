import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '20px', padding: '10px'}}>
            Your steps count : {props.steps}
        </div>
    );
};

export default Dial;