import React, { Component } from 'react'


class ButtonWithMassage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpened:false,
        };
    }

    changeButtonSate = () => {
        this.setState((prevState, props) => {
            return {isOpened:!prevState.isOpened}});
    };


    render() {
        let underClass = `${this.props.textclass}`;

        if(!this.state.isOpened) {
            underClass = "invisible"
        }

        return(
            <div>
                <button disabled={this.state.isOpened} {...this.props} onClick={this.changeButtonSate}>{this.props.title}</button>
                <span className={underClass}>{this.props.massage}</span>
            </div>
        )
    }

}

export default ButtonWithMassage;