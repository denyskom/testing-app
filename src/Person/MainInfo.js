import React from 'react'
import Phone from '../../node_modules/react-icons/lib/fa/phone'
import Mail from '../../node_modules/react-icons/lib/go/mail'
import Birth from '../../node_modules/react-icons/lib/fa/birthday-cake'




const mainInfo = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src="https://ppgzone-39u4nsxgmu93y.netdna-ssl.com/wp-content/uploads/batman-profile-pic.jpg"
                 alt="Profile photo"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{props.phone}<Phone class="info-glyph"/></p>
                    <p>{props.email}<Mail class="info-glyph"/></p>
                    <p>{props.birthDate}<Birth class="info-glyph"/></p>
                </div>
        </div>

    );

};

export default mainInfo;