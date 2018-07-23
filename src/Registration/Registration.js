import React, {Component} from 'react';
import './Registration.css'
import MainBlock from "./MainBlock"
import EducationBlock from "./EducationBlock";

const blocksCount = 3;

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuId:1,
        }
    }

    selectMenu = () => {
        let menuId = this.state.menuId;
        if(menuId === 1) {
            return (<MainBlock/>);
        }

        if(menuId === 2) {
            return (<EducationBlock/>);
        }

        if(menuId === 3) {
            return (<h2>Additional</h2>);
        }
    };

    changeMenu = (event) => {
        let id = event.target.value;
        if(id <= 2) {
            id++;
            this.setState({menuId:id});
        }
    };

    render() {
        return(
            <div className="registration">
                <h5>Create your InterLink Account</h5>
                {this.selectMenu()}
                <div className="dots">
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
                <button onClick={this.changeMenu} value={this.state.menuId} type="button"
                        className="btn btn-outline-info">Далі</button>
            </div>
        )
    }
}

export default Registration;