import React, { Component } from 'react';
import axios from 'axios';

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
        axios.get()
    }
}