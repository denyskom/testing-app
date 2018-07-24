import React from 'react';

const input = (props) =>{
    let item = props.item;
    let renderOptions = (array) => {
        return array.map(option => <option value={option}>{option}</option>);
    };

    switch (item.elementType) {
        case('input'):
            return(<input {...item.elementConfig}/>); //value
        case('select'):{
            return(<select value={item.value}>
                {renderOptions(item.elementConfig.options)}
            </select>);
        }
        case('date'):
            return (<input value={item.value} {...item.elementConfig}/>);

    }

    return (
            <input {...props}/>
    );
};

export default input;