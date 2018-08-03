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
              <div className='input-row'>
                  <span className={props.errors.firstName?'error-span':"invisible"}>
                      {props.errors.firstName?`${props.errors.firstName}`:"invisible"}
                  </span>
                  <span className={props.errors.lastName && !props.errors.firstName?'error-span':"invisible"}> </span>
                  <span className={props.errors.lastName?'error-span':"invisible"}>
                      {props.errors.lastName?`${props.errors.lastName}`:''}
                  </span>
              </div>
              <div className={requiredInputClass}>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="email" item={person.email}/>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="phone" item={person.phone}/>
              </div>
              <div className='input-row'>
                  <span className={props.errors.email?'error-span':"invisible"}>
                      {props.errors.email?`${props.errors.email}`:"invisible"}
                  </span>
                  <span className={props.errors.phone && !props.errors.email?'error-span':"invisible"}> </span>
                  <span className={props.errors.phone?'error-span':"invisible"}>
                      {props.errors.phone?`${props.errors.phone}`:''}
                  </span>
              </div>
              <div className={requiredInputClass}>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="password" item={person.password}/>
                  <span>*</span>
                  <Input className="labeled" onChange={changeHandler} name="passwordConfirm" item={person.passwordConfirm}/>
              </div>
              <div className='input-row'>
                  <span className={props.errors.password?'error-span':"invisible"}>
                      {props.errors.password?`${props.errors.password}`:"invisible"}
                  </span>
                  <span className={props.errors.passwordConfirm && !props.errors.password?'error-span':"invisible"}> </span>
                  <span className={props.errors.passwordConfirm?'error-span':"invisible"}>
                      {props.errors.passwordConfirm?`${props.errors.passwordConfirm}`:''}
                  </span>
              </div>
              <div className="labeled-input">
                  <span>*</span>
                  <label>{person.birth_date.label}</label>
                  <Input onChange={changeHandler} name="birth_date" item={person.birth_date}/>
              </div>
              <div className='input-row'>
                  <span className={props.errors.birth_date?'error-span':"invisible"}> </span>
                  <span className={props.errors.birth_date?'error-span':"invisible"}>
                      {props.errors.birth_date?`${props.errors.birth_date}`:''}
                  </span>
              </div>
          </div>
          <div className="registration-img">
             <img src={require('../Logo/logo2.png')} alt="InterLink"/>
          </div>
      </form>
    );
};

export default mainBlock;