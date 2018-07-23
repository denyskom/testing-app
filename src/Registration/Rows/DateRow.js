import React from 'react';

const dateRow = (props) =>{
    return (
        <div className="labeled-input">
            <label>Дата народження:</label>
            <input id="inputDate" className="" type="date"/>
        </div>
    );
};

export default dateRow;