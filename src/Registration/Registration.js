import React, {Component} from 'react';
import './Refistration.css'
import MainBlock from "./MainBlock";

class Registration extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="registration">
                <h5>Create your InterLink Account</h5>
                <MainBlock/>
                <div className="dots">
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
                <button type="button" className="btn btn-outline-info">Далі</button>
            </div>
        )

    }
}

export default Registration;