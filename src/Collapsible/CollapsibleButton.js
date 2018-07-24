import React, { Component } from 'react'
import './CollapsibleButton.css'





class CollapsibleButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpened:false,
        };
    }

    changeButtonSate = () => {
        let current = this.state.isOpened;
        this.setState({isOpened:!current});
    };


    render() {
        let underClass = "under-button";

        if(!this.state.isOpened) {
            underClass = "invisible"
        }

        return(
            <div className="collapsible">
                <button onClick={this.changeButtonSate}>Детальніше</button>
                <div className={underClass}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default CollapsibleButton;