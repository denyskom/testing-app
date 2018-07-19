import React from 'react';


const additionalInfo = (props) =>{
    let getSections = () => {
        return props.sections.map(section => {
            return (
                <div className="section" key={section.title}>
                    <h5 className="card-title">{section.title}</h5>
                    <p className="card-text">{section.inner}</p>
                </div>
            )
            }

        )
    };

    return(
        <div className="edu card-body">
            {getSections()}
        </div>
    );
};

export default additionalInfo;