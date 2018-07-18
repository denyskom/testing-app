import React from 'react';


const education = (props) =>{
    return(
        <div className="edu card-body">
            <h5 className="card-title">ВНЗ:</h5>
            <p className="card-text">{props.university}</p>
            <h5 className="card-title">Факультет:</h5>
            <p className="card-text">{props.faculty}</p>
            <h5 className="card-title">Курс:</h5>
            <p className="card-text">{props.course}</p>
            <h5 className="card-title">Володіння англійською мовою:</h5>
            <p className="card-text">{props.english}</p>
            <h5 className="card-title">Що ви знаєте з основ програмування?</h5>
            <p className="card-text">{props.basics}</p>
            <h5 className="card-title">Чи відвідували ви додаткові курси чи івенти?</h5>
            <p className="card-text">{props.events}</p>
            <h5 className="card-title">Які статті чи книги у сфері IT ви прочитали за останній рік?</h5>
            <p className="card-text">{props.literature}</p>
        </div>
    );

};

export default education;