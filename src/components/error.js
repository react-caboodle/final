import React from 'react';

export const Error = (props) =>(
    <div>
        <h3>
            {props.location.state.error}
        </h3>
        <p>Please enter the correct code and try again.</p>
        <button onClick={()=>props.history.push('/')}>Try again</button>
    </div>
)