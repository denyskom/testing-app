import React, { Component } from 'react';
import './Head.css'


class Head extends Component{

    render () {
        return (
            <nav className="custom-head">
                <ul className="head-list">
                    <li className="header-item">
                        <img src="https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/03/logo.png" alt="InterLink"/>
                    </li>
                    <li className="header-item"><a className="head-link" href="/">Головна</a></li>
                    <li className="header-item"><a className="head-link" href="#">Moї активності</a></li>
                    <li className="header-item"><a className="head-link" href="./people">Moї дані</a></li>
                </ul>
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
                        {/*aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*</button>*/}
            </nav>
        );

    }

}

export default Head;