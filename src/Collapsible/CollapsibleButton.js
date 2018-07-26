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
            <div className={this.props.className?this.props.className:"collapsible"}>
                <button onClick={this.changeButtonSate}>{this.props.title}</button>
                <div className={underClass}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default CollapsibleButton;