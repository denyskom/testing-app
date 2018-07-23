import React from 'react';

const dateRow = (props) =>{
    let divClassName = "labeled-input";
    if(props.isRequired) {
        divClassName +=" required";
        }

        return (
        <div className={divClassName}>
            <label>Дата народження:</label>
            <input id="inputDate" className="" type="date"/>
        </div>

    );
};

export default dateRow;