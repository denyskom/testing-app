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
                        <button onClick={props.method} value="1" className={checkIfActive(1,props.id)}>Освіта</button>
                    </li>
                    <li className="nav-item">
                        <button  onClick={props.method} value="2" className={checkIfActive(2,props.id)}>Додаткова інформація</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" href="#">Активності</button>
                    </li>
                </ul>
            </div>
            {props.children}
        </div>
    );

};

export default info;