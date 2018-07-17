import React, { Component } from 'react';
import axios from 'axios';
import './Person.css'

const internUrl = "http://localhost:3004/people";


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            person:{}
        }
    }

    componentDidMount() {
        axios.get(internUrl).then(response => {
            this.setState({person:response.data,isLoaded:true})
        })
    }

    render() {
        if(!this.state.isLoaded) {
            return(<h3>Loading...</h3>)
        }

        return(
            <div className="splitter">
                <div id="left" className="custom-column">
                    <h2>Left</h2>
                </div>
                <div id="right" className="custom-column">
                    <h2>Right</h2>
                </div>
            </div>
        );
    }
}

export default Person;