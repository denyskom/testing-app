import React from 'react'
import './SmallLead.css.css'
import { Link } from 'react-router-dom'
import warning from '../../../img/warning.png'
import profile from '../../../img/profile.svg'


const smallLead = (props) => {
    let lead = props.lead;

    return(
        <div>
            <div>
                <Link to='#'>
                    <strong><img src={lead.owner.avatar?lead.owner.avatar:profile}/>{lead.name}</strong>
                    <small><span>UAN</span>{lead.contact.name}</small>
                </Link>
            </div>
            <div>
                <span>
                    <Link>
                        {warning}
                    </Link>
                </span>
            </div>
        </div>
    )
};
export default smallLead