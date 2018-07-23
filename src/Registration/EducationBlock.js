import React from 'react';
import DoubleInputRow from "./Rows/DoubleInputRow";
import DateRow from "./Rows/DateRow";


const educationBlock =(props) => {
    let englishKnowledge = [
        "початковий (читаю та пишу зі словником)",
        "середній (вільно читаю та пишу, можу розмовляти на певні теми)",
        "продвинутий (вільно спілкуюся на будь-які теми)"
    ];

    let getCourseOptions = () => {
        let options = [];
        for(let i = 1; i <= 6; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return options;
    };

    let getEnglishOptions = () => {
       return englishKnowledge.map(knowledge => <option value={knowledge}>{knowledge}</option>);
    };



    return(
        <form className="registration-block">
            <div className="registration-forms">
                <DoubleInputRow left="ВНЗ" right="Факультет"/>
                <div className="labeled-input">
                    <label>Курс:</label>
                    <select>
                        {getCourseOptions()}
                    </select>
                </div>
                <div className="labeled-input">
                    <label>Знання англійскої</label>
                    <select>
                        {getEnglishOptions()}
                    </select>
                </div>
                <input className="single" type="text"  placeholder="Що ви знаєте з основ програмування?"/>
                <input className="single" type="text"  placeholder="Чи відвідували ви додаткові курси чи івенти?"/>
                <input className="single" type="text"  placeholder="Які статті чи книги у сфері IT ви прочитали за останній рік?"/>
            </div>
            <div className="registration-img">
                <img src={require('../Logo/logo2.png')} alt="InterLink"/>
            </div>
        </form>
    );
};

export default educationBlock;