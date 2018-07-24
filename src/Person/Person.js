import React, { Component } from 'react';
import axios from 'axios';
import './Person.css'
import MainInfo from "./ContactInfo";
import Info from "./Info";
import AdditionalInfo from "./AdditionalInfo";
import MiniActivity from "../Activity/MiniActivity";

const internUrl = "http://localhost:3004/people";


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            person:{},
            personId:this.props.match.params.id?this.props.match.params.id:"5b51887e190b6020ef001637",
            // personId:"5b5716515b2b55408143a1a9",

            menuId:1
        }
    }

    componentDidMount() {
        axios.get(`${internUrl}/${this.state.personId}`).then(response => {
            this.setState({person:response.data,isLoaded:true})
        })
    };

    renderEducationInfo = () => {
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

    renderAdditionalInfo = () => {
        let person = this.state.person;

        let sections = [
            {title:"Чому Ви хочете працювати в IT?:", inner:person.whyIT?person.whyIT:"No data"},
            {title:"Якими технологіями Ви цікавитесь?:", inner:person.technologies?person.technologies:"No data"},
            {title:"Що, на Ваш погляд, найважливіше у майбутній роботі?:",
                inner:person.mainInJob?person.mainInJob:"No data"},
            {title:"Вкажіть свої 5 позитивних рис характеру", inner:person.positiveSides?person.positiveSides:"No data"},
            {title:"Вкажіть свої 5 негативних рис характеру", inner:person.negativeSides?person.negativeSides:"No data"},

        ];

        return (<AdditionalInfo sections={sections}/>);
    };

    renderActivityInfo = () => {
        let activities = this.state.person.activities;

        return activities.map(activity => <MiniActivity key={activity.id} activity={activity}/>).reverse();
    };


    selectMenu = () => {
        let menuId = this.state.menuId;
        if(menuId === 1) {
            return this.renderEducationInfo();
        }

        if(menuId === 2) {
            return this.renderAdditionalInfo();
        }

        if(menuId === 3) {
            return this.renderActivityInfo();
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
            return(<div className="loader"> </div>)
        }

        let person = this.state.person;

        return(
            <div className="splitter">
                <div id="left" className="custom-column">
                    <MainInfo name={`${person.firstName} ${person.lastName}`}
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