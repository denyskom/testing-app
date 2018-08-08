import React from 'react'
import { Link } from 'react-router-dom'
import SmallLead from "./SmallLead";
import './SmallLead.css.css'




const leadColumn = (props) => {
    let lead = {
        name:'Lead name',
        contact: {
            name: 'person name',
        }

    };

    return(
        <div className='lead-column-container'>
            <SmallLead lead={lead}/>
        </div>

    )
};
export default leadColumn