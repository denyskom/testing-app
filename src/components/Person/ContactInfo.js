import React from 'react'
import Phone from '../../../node_modules/react-icons/lib/fa/phone'
import Mail from '../../../node_modules/react-icons/lib/go/mail'
import Birth from '../../../node_modules/react-icons/lib/fa/birthday-cake'
import CollapsibleButton from "../Collapsible/CollapsibleButton";




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
                    <button onClick={props.delete} style={{width:"100%"}} className="btn btn-info btn-sm" >Видалити</button>
                    {/*<CollapsibleButton className="photo-button" title={"Change photo"}>*/}
                        {/*<div className="photo-submit">*/}
                            {/*<input placeholder="Photo URL" type="text"/>*/}
                            {/*<button className="btn btn-info btn-sm">Ok</button>*/}
                        {/*</div>*/}
                    {/*</CollapsibleButton>*/}
                </div>
        </div>

    );

};

export default contactInfo;