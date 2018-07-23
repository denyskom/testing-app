import React, { Component } from 'react';
import CollapsibleButton from "./CollapsibleButton";
import ActivityPresentationList from "../Activity/ActivityPresentationList";


class Tester extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpened:false,
        }
    }

    changeButtonSate = () => {
        let current = this.state.isOpened;
        this.setState({isOpened:!current});
    };


    render() {
        return <CollapsibleButton isOpened={this.state.isOpened} clicker={this.changeButtonSate}>{this.props.information}</CollapsibleButton>
    }

}

export default Tester;