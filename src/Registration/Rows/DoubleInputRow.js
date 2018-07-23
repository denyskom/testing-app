import React from 'react';

const doubleInputRow = (props) =>{

    let divClassName = "input-row";
    if(props.isRequired) {
        divClassName +=" required";
    }

    return (
        <div className={divClassName}>
            <input type="text"  placeholder={props.left}/>
            <input type="text"  placeholder={props.right}/>
        </div>
    );
};

export default doubleInputRow;