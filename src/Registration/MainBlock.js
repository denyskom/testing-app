import React from 'react';
import DoubleInputRow from "./Rows/DoubleInputRow";
import DateRow from "./Rows/DateRow";
import Input from "./Input/Input";


const mainBlock =(props) => {
    let requiredInputClass = "input-row required";
    let person = props.person;

    return(
      <form className="registration-block">
          <div className="registration-forms">
              <div className={requiredInputClass}>
                  <Input item={person.name}/>
                  <input  type="text"  placeholder="Прізвище"/>
              </div>
              <div className={requiredInputClass}>
                  <Input item={person.email}/>
                  <Input item={person.phone}/>
              </div>
              <div className={requiredInputClass}>
                  <Input item={person.password}/>
                  <input  type="password"  placeholder="Підтвердити пароль"/>
              </div>
              <div className="labeled-input">
                  <label>{person.birth_date.label}</label>
                  <Input item={person.birth_date}/>
              </div>
          </div>
          <div className="registration-img">
             <img src={require('../Logo/logo2.png')} alt="InterLink"/>
          </div>
      </form>
    );
};

export default mainBlock;