import React, { Component } from 'react';
import axios from 'axios';
import './Person.css'
import MainInfo from "./MainInfo";
import Info from "./Info";
import Education from "./Education";

const internUrl = "http://localhost:3004/people";


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            person:{},
            personId:1,
            menuId:1
        }
    }

    componentDidMount() {
        axios.get(`${internUrl}/${this.state.personId}`).then(response => {
            this.setState({person:response.data,isLoaded:true})
        })
    }

    getEducationInfo = () => {

        let person = this.state.person;
        return (
          <Education university={person.university?person.university:"No data"}
                     faculty={person.faculty?person.faculty:"No data"}
                     course={person.course?person.course:"No data"}
                     english={person.english?person.english:"No data"}
                     basics={person.basics?person.basics:"No data"}
                     events={person.events?person.events:"No data"}
                     literature={person.literature?person.literature:"No data"}/>
        );
    };

    selectMenu = () => {
        let menuId = this.state.menuId;
        if(menuId === 1) {
            return this.getEducationInfo();
        }

        if(menuId === 2) {
            return <h2>More</h2>;
        }

        if(menuId === 3) {
            return <h2>Activity</h2>;
        }

    };

    changeMenu = (event) => {
        let id = event.target.value;
        this.setState({menuId:id});
    };




    render() {
        if(!this.state.isLoaded) {
            return(<h3>Loading...</h3>)
        }

        return(
            <div className="splitter">
                <div id="left" className="custom-column">
                    <MainInfo name={this.state.person.name}
                              phone={this.state.person.phone}
                              email={this.state.person.email}
                              birthDate={this.state.person.birth_date}/>
                </div>
                <div id="right" className="custom-column">
                    <Info  method={this.changeMenu} id={this.state.menuId}>
                        {this.selectMenu()}
                    </Info>
                </div>
            </div>
        );
    }
}

export default Person;