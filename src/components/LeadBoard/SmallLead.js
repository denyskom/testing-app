import React from 'react'
import './SmallLead.css'
import {Link} from 'react-router-dom'
// import warning from '../../../img/warning.png'e
// import profile from '../../../img/profile.svg'
const warning = require('./warning.png');
const profile = require('./profile.svg');


const smallLead = (props) => {
    let lead = props.lead;

    return (
        <div className='small-lead-container'>
            <div style={{display:'block'}}>
                <Link className='small-lead-info' to='#'>
                    <strong><img className='small-lead-avatar'
                                 src={lead.owner.avatar ? lead.owner.avatar : profile}/> {lead.name}</strong>
                    <small><span className='small-lead-currency'>UAN</span>{lead.contact.name}</small>
                </Link>
            </div>
            <div className='small-lead-warning-div'>
                <Link className='small-lead-warning'  to='#'>
                    <img className='small-lead-warning-img' src={warning}/>
                </Link>
            </div>
        </div>
    )
};
export default smallLead