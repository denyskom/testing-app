import React from 'react';

import Input from "./Input/Input";


const educationBlock =(props) => {
    let person = props.person;

    return(
        <form className="registration-block">
            <div className="registration-forms">
                <div className="input-row">
                    <Input item={person.university}/>
                    <Input item={person.faculty}/>
                </div>
                <div className="labeled-input required">
                     <label>{person.course.label}</label>
                     <Input item={person.course}/>
                </div>
                <div className="labeled-input">
                    <label>{person.english.label}</label>
                    <Input item={person.english}/>
                </div>

                <Input className="single" item={person.basics}/>
                <Input className="single" item={person.events}/>
                <Input className="single" item={person.literature}/>
            </div>
            <div className="registration-img">
                <img src={require('../Logo/logo2.png')} alt="InterLink"/>
            </div>
        </form>
    );
};

export default educationBlock;