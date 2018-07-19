import React, { Component } from 'react';
import axios from 'axios';
import './Person.css'
import MainInfo from "./ContactInfo";
import Info from "./Info";
import Education from "./Education";
import AdditionalInfo from "./AdditionalInfo";

const internUrl = "http://localhost:3004/people";


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            person:{},
            personId:"5b505f9d73a2bc254045ed3f",
            menuId:1
        }
    }

    componentDidMount() {
        axios.get(`${internUrl}/${this.state.personId}`).then(response => {
            this.setState({person:response.data,isLoaded:true})
        })
    };

    getEducationInfo = () => {
        let person = this.state.person;

        let sections = [
            {title:"ВНЗ:", inner:person.university?person.university:"No data"},
            {title:"Факультет:", inner:person.faculty?person.faculty:"No data"},
            {title:"Курс:", inner:person.course?person.course:"No data"},
            {title:"Володіння англійською мовою:", inner:person.english?person.english:"No data"},
            {title:"Що ви знаєте з основ програмування?", inner:person.basics?person.basics:"No data"},
            {title:"Чи відвідували ви додаткові курси чи івенти?", inner:person.events?person.events:"No data"},
            {title:"Які статті чи книги у сфері IT ви прочитали за останній рік?",
                inner:person.literature?person.literature:"No data"},
            ];

        return (<AdditionalInfo sections={sections}/>);

    };

    getEditionalInfo = () => {
        let person = this.state.person;

        let sections = [
            {title:"Чому Ви хочете працювати в IT?:", inner:person.why?person.why:"No data"},
            {title:"Якими технологіями Ви цікавитесь?:", inner:person.tehnologies?person.tehnologies:"No data"},
            {title:"Що, на Ваш погляд, найважливіше у майбутній роботі?:", inner:person.main?person.main:"No data"},
            {title:"Вкажіть свої 5 позитивних рис характеру", inner:person.positive?person.positive:"No data"},
            {title:"Вкажіть свої 5 негативних рис характеру", inner:person.negative?person.negative:"No data"},

        ];

        return (<AdditionalInfo sections={sections}/>);
    };

    selectMenu = () => {
        let menuId = this.state.menuId;
        if(menuId === 1) {
            return this.getEducationInfo();
        }

        if(menuId === 2) {
            return this.getEditionalInfo();
        }

        if(menuId === 3) {
            return <h2>Activity</h2>;
        }

    };

    changeMenu = (event) => {
        let id = Number(event.target.value);
        this.setState({menuId:id});
    };

    parseDate = (date) => {
       return new Date(date).toDateString().substring(4)
    };


    render() {
        if(!this.state.isLoaded) {
            return(<h3>Loading...</h3>)
        }

        let person = this.state.person;

        return(
            <div className="splitter">
                <div id="left" className="custom-column">
                    <MainInfo name={person.name}
                              phone={person.phone}
                              email={person.email}
                              birthDate={this.parseDate(person.birth_date)}/>
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