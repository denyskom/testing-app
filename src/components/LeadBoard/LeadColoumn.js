import React from 'react'
import { Link } from 'react-router-dom'
import SmallLead from "./SmallLead";
import './SmallLead.css'




const leadColumn = (props) => {
    let lead = {
        name:'john deal',
        contact: {
            name: 'person name',
        },
        owner: {

        }

    };

    return(
        <div className='lead-column-container'>
            <SmallLead lead={lead}/>
        </div>

    )
};
export default leadColumn