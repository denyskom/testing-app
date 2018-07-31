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
                  <label>*</label>
                  <Input onChange={changeHandler} name="firstName" item={person.firstName}/>
                  <label>*</label>
                  <Input  onChange={changeHandler} name="lastName" item={person.lastName}/>
              </div>
              <div className={requiredInputClass}>
                  <Input onChange={changeHandler} name="email" item={person.email}/>
                  <Input onChange={changeHandler} name="phone" item={person.phone}/>
              </div>
              <div className={requiredInputClass}>
                  <Input onChange={changeHandler} name="password" item={person.password}/>
                  <Input onChange={changeHandler} name="passwordConfirm" item={person.passwordConfirm}/>
              </div>
              <div className="labeled-input">
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