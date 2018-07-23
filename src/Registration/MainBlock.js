import React from 'react';
import InputRow from "./Rows/DoubleInputRow";
import DateRow from "./Rows/DateRow";


const mainBlock =(props) => {

    return(
      <form className="registration-block">
          <div className="registration-forms">
              <InputRow isRequired={true} left="Прізвище" right="Ім'я"/>
              <InputRow isRequired={true} left="Email" right="Телефон"/>
              <InputRow isRequired={true} left="Пароль" right="Підтвердити пароль"/>
              <DateRow isRequired={true}/>
          </div>
          <div className="registration-img">
             <img src={require('../Logo/logo2.png')} alt="InterLink"/>
          </div>
      </form>
    );
};

export default mainBlock;