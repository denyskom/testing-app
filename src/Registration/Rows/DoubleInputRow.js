import React from 'react';

const doubleInputRow = (props) =>{
    return (
        <div className="input-row">
            <input type="text"  placeholder={props.left}/>
            <input type="text"  placeholder={props.right}/>
        </div>
    );
};

export default doubleInputRow;