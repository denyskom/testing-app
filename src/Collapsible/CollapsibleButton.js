import React, { Component } from 'react'
import './CollapsibleButton.css'



const collapsibleButton = (props) => {
    let underClass = "under-button";

    if(!props.isOpened) {
        underClass = "invisible"
    }
    return (
        <div className="collapsible">
            <button onClick={props.clicker}>Опис</button>
            <div className={underClass}>
                {props.children}
            </div>
        </div>
    )
};

export default collapsibleButton;