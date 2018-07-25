import React, { Component } from 'react'


class ButtonWithMassage extends Component{
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
        let underClass = `${this.props.textClass}`;

        if(!this.state.isOpened) {
            underClass = "invisible"
        }

        return(
            <div>
                <button {...this.props} onClick={this.changeButtonSate}>{this.props.title}</button>
                <span className={underClass}>{this.props.massage}</span>
            </div>
        )
    }

}

export default ButtonWithMassage;