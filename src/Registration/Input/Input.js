import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";

const input = (props) => {
    let item = props.item;
    let renderOptions = (array) => {
        return array.map(option => <option value={option}>{option}</option>);
    };

    switch (item.elementType) {
        case('input'):
            return (
                <input value={item.value} {...item.elementConfig} name={props.name}
                       {...props}/>
            );
        case('select'): {
            return (<select value={item.value} {...props}>
                {renderOptions(item.elementConfig.options)}
            </select>);
        }
        case('date'):
            return (
                <input {...props} onChange={props.onChange} value={item.value} {...item.elementConfig} />
            );

    }

    return (
        <input {...props}/>
    );
};

export default input;