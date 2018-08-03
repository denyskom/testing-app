import React, { Component } from 'react';
import axios from 'axios';
import ContactInfo from "./ContactInfo";
import routes from '../Main/Routes';



class PersonsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            persons:[]
        }
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        console.log('here');
        axios.get(`${routes.serverActivity}/5b5185acb7081420082ec151/persons`)
            .then(res => {
                let persons = res.data;
                this.setState({persons:persons});
            })
    }

    renderPersons =  () => {
        return(
            <div>
                {this.state.persons.map(person => {
                    return(<ContactInfo name={`${person.firstName} ${person.lastName}`}
                                        phone={person.phone}
                                        email={person.email}
                                        birthDate={this.parseDate(person.birth_date)}
                                        photo={person.photo}/>)
                })}
            </div>
        )
    };

    render() {
        return this.renderPersons();
    }


}

export default PersonsList;