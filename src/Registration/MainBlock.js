import React from 'react';
import InputRow from "./Rows/DoubleInputRow";
import DateRow from "./Rows/DateRow";


const mainBlock =(props) => {

    return(
      <form className="registration-block">
          <div className="registration-forms">
              <InputRow left="Прізвище" right="Ім'я"/>
              <InputRow left="Email" right="Телефон"/>
              <InputRow left="Пароль" right="Підтвердити пароль"/>
              <DateRow/>
          </div>
          <div className="registration-img">
             <img src={require('../Logo/logo2.png')} alt="InterLink"/>
          </div>
      </form>
    );
};

export default mainBlock;