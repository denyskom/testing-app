import React from 'react';
import Input from "./Input/Input";


const additionalBlock =(props) => {
    let person = props.person;

    return(
        <form className="registration-block">
            <div className="registration-forms">
                <Input className="single" item={person.whyIT}/>
                <Input className="single" item={person.technologies}/>
                <div className="labeled-input">
                    <label>{person.mainInJob.label}</label>
                    <Input item={person.mainInJob}/>
                </div>
                <Input className="single" item={person.positiveSides}/>
                <Input className="single" item={person.positiveSides}/>
            </div>
            <div className="registration-img">
                <img src={require('../Logo/logo2.png')} alt="InterLink"/>
            </div>
        </form>
    );
};

export default additionalBlock;