import React from 'react';



const info = (props) => {
    let checkIfActive = (needed, id) => {
        let cssClass = "nav-link";
        if (needed === id) {
            return `${cssClass} active`;
        }

        return cssClass;
    };



    return (
        <div className="card">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className={checkIfActive(1,props.id)}>Освіта</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className={checkIfActive(2,props.id)}>Додаткова інформація</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Активності</a>
                    </li>
                </ul>
            </div>
            {props.children}
        </div>
    );

};

export default info;