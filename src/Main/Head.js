import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Head.css'
import LoginMarker from "../Login/LoginMarker";


class Head extends Component{

    render () {
        return (
            <nav className="custom-head">
                <ul className="head-list">
                    <li className="header-item">
                        <img src="https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/03/logo.png" alt="InterLink"/>
                    </li>
                    <li className="header-item"><Link className="head-link" to="../home">Головна</Link></li>
                    <li className="header-item"><a className="head-link" href="#">Moї активності</a></li>
                    <li className="header-item"><a className="head-link" href="../home/people">Moї дані</a></li>
                    <li className="header-item-right"><LoginMarker isLogged={false}/></li>


                </ul>


                {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
                        {/*aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*</button>*/}
            </nav>
        );

    }

}

export default Head;