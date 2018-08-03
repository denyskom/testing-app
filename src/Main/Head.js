import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Head.css'
import LoginMarker from "../Login/LoginMarker";
import Wrapper from "../Wrapper/Wrapper"
import Media from "react-media"
import Menu from '../../node_modules/react-icons/lib/md/menu'
import routes from '../Main/Routes';


class Head extends Component {
    state = {
        isOpened: false
    };

    checkUserAuth = () => {
        return this.props.auth.isAuthenticated;
    };

    renderMenuList = () => {
        const menuClass = this.checkUserAuth() ? "header-item" : "invisible";

        return <Wrapper>
            <li className={menuClass}><Link className="head-link" to={`../../${routes.appHomeRelative}`}>Головна</Link>
            </li>
            {/*<li className={menuClass}><a className="head-link" href="#">Moї активності</a></li>*/}
            <li className={menuClass}><Link className="head-link" to={`../../${routes.appPeopleRelative}`}>Moї дані</Link>
            </li>
            <li className="header-item-right"><LoginMarker isLogged={this.checkUserAuth()}
                                                           avatar={this.props.auth.user.photo}/></li>
        </Wrapper>
    };

    renderButtonIfNeeded = () => {
        if (this.checkUserAuth()) {
            return (<div className="header-item-right">
                <button onClick={this.menuHandler}><Menu size={26}/></button>
            </div>)

        }

        return <li className="header-item-right"><LoginMarker isLogged={this.checkUserAuth()}/></li>


    };

    menuHandler = () => {
        this.setState((prevState, props) => {
            return {isOpened: !prevState.isOpened}
        });
    };

    render() {

        return (
            <Wrapper>
                <nav className="custom-head">
                    <ul className="head-list">
                        <li className="header-item">
                            <Link to="../../home">
                                <img src="https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/03/logo.png"
                                     alt="InterLink"/>
                            </Link>
                        </li>
                        <Media query="(max-width: 598px)">
                            {matches =>
                                matches ? (
                                    this.renderButtonIfNeeded()

                                ) : (
                                    <div className="head-list">
                                        {this.renderMenuList()}
                                    </div>)
                            }
                        </Media>
                    </ul>
                </nav>
                <div className={this.state.isOpened ? "bottom-menu" : "invisible"}>
                    {this.renderMenuList()}
                </div>
            </Wrapper>
        );

    }

}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(Head);