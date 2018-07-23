import React, { Component } from 'react'
import './CollapsibleButton.css'



const collapsibleButton = (props) => {
    return (
        <div className="collapsible">
            <button>Опис</button>
            <p>
                {props.information}
            </p>
        </div>
    )
};

export default collapsibleButton;