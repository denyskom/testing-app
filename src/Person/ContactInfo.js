import React from 'react'
import Phone from '../../node_modules/react-icons/lib/fa/phone'
import Mail from '../../node_modules/react-icons/lib/go/mail'
import Birth from '../../node_modules/react-icons/lib/fa/birthday-cake'




const contactInfo = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={props.photo}
                 alt="Profile photo"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{props.phone}<Phone size={20} className="info-glyph"/></p>
                    <p>{props.email}<Mail size={20} className="info-glyph"/></p>
                    <p>{props.birthDate}<Birth size={20} className="info-glyph"/></p>
                </div>
        </div>

    );

};

export default contactInfo;