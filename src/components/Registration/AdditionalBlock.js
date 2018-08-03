import React from 'react';
import Input from "./Input/Input";


const additionalBlock =(props) => {
    let person = props.person;
    let changeHandler = props.changeHandler;


    return(
        <form className="registration-block">
            <div className="registration-forms">
                <Input onChange={changeHandler} name="whyIT" className="single" item={person.whyIT}/>
                <Input onChange={changeHandler} name="technologies" className="single" item={person.technologies}/>
                <div className="labeled-input">
                    <label>{person.mainInJob.label}</label>
                    <Input onChange={changeHandler} name="mainInJob" item={person.mainInJob}/>
                </div>
                <Input onChange={changeHandler} name="positiveSides" className="single" item={person.positiveSides}/>
                <Input onChange={changeHandler} name="negativeSides" className="single" item={person.negativeSides}/>
            </div>
            <div className="registration-img">
                <img src={require('../Logo/logo2.png')} alt="InterLink"/>
            </div>
        </form>
    );
};

export default additionalBlock;