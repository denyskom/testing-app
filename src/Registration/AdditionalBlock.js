import React from 'react';

const mainGoals = [
    'Висока заробітня плата',
    'Можливість навчатись та розвиватись',
    'Дружній колектив',
    'Можливість реалізувати себе',
    'Стабільність'
];

const additionalBlock =(props) => {
    let renderMainGoals = () => {
        return mainGoals.map(goal => <option value={goal}>{goal}</option>)
    };

    return(
        <form className="registration-block">
            <div className="registration-forms">
                <input className="single" type="text"  placeholder="Чому Ви хочете працювати в IT?"/>
                <input className="single" type="text"  placeholder="Якими технологіями Ви цікавитесь?"/>
                <div className="labeled-input">
                    <label>Що, на Ваш погляд, найважливіше у майбутній роботі?</label>
                    <select>
                        {renderMainGoals()}
                    </select>
                </div>
                <input className="single" type="text"  placeholder="Вкажіть свої 5 позитивних рис характеру"/>
                <input className="single" type="text"  placeholder="Вкажіть свої 5 негативних рис характеру"/>
            </div>
            <div className="registration-img">
                <img src={require('../Logo/logo2.png')} alt="InterLink"/>
            </div>
        </form>
    );
};

export default additionalBlock;