import React from 'react';
import Input from "./Input/Input";


const mainBlock =(props) => {
    let requiredInputClass = "input-row";
    let person = props.person;
    let changeHandler = props.changeHandler;

    return(
      <form className="registration-block">
          <div className="registration-forms">
              <div className={requiredInputClass}>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="firstName" item={person.firstName}/>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="lastName" item={person.lastName}/>
              </div>
              <div className={requiredInputClass}>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="email" item={person.email}/>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="phone" item={person.phone}/>
              </div>
              <div className={requiredInputClass}>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="password" item={person.password}/>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="passwordConfirm" item={person.passwordConfirm}/>
              </div>
              <div className="labeled-input">
                  <span>*</span>
                  <label>{person.birth_date.label}</label>
                  <Input onChange={changeHandler} name="birth_date" item={person.birth_date}/>
              </div>
          </div>
          <div className="registration-img">
             <img src={require('../Logo/logo2.png')} alt="InterLink"/>
          </div>
      </form>
    );
};

export default mainBlock;