import React from 'react';
import Input from "./Input/Input";


const educationBlock =(props) => {
    let person = props.person;
    let changeHandler = props.changeHandler;


    return(
        <form className="registration-block">
            <div className="registration-forms">
                <div className="input-row">
                    <Input onChange={changeHandler} name="university" item={person.university}/>
                    <Input onChange={changeHandler} name="faculty" item={person.faculty}/>
                </div>
                <div className="labeled-input required">
                     <label>{person.course.label}</label>
                     <Input onChange={changeHandler} name="course" item={person.course}/>
                </div>
                <div className="labeled-input">
                    <label>{person.english.label}</label>
                    <Input onChange={changeHandler} name="english" item={person.english}/>
                </div>

                <Input onChange={changeHandler} name="basics" className="single" item={person.basics}/>
                <Input onChange={changeHandler}  name="events" className="single" item={person.events}/>
                <Input onChange={changeHandler} name="literature" className="single" item={person.literature}/>
            </div>
            <div className="registration-img">
                <img src={require('../Logo/logo2.png')} alt="InterLink"/>
            </div>
        </form>
    );
};

export default educationBlock;