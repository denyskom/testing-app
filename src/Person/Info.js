import React from 'react';

const EDUCATION_ID = 1;
const ADDITIONAL_INFO_ID = 2;
const ACTIVITY_ID = 3;



const info = (props) => {
    let checkIfActive = (needed, id) => {
        let cssClass = "nav-link";
        if (needed === id) {
            return `${cssClass} active`;
        }

        return cssClass;
    };



    return (
        <div className="general card">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <button onClick={props.method} value={EDUCATION_ID}
                                className={checkIfActive(EDUCATION_ID,props.id)}>Освіта</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={props.method} value={ADDITIONAL_INFO_ID}
                                className={checkIfActive(ADDITIONAL_INFO_ID,props.id)}>Додаткова інформація</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={props.method} value={ACTIVITY_ID}
                                className={checkIfActive(ACTIVITY_ID,props.id)}>Активності</button>
                    </li>
                </ul>
            </div>
            <div className="info">
                {props.children}
            </div>
        </div>
    );

};

export default info;