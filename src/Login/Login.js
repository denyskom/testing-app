import React, { Component } from 'react';
import './Login.css'
import {Redirect} from 'react-router-dom';

import axios from "axios/index";
// const loginUrl = 'http://localhost:3004/login';
const routes = require('../Main/Routes');
const jwtDecode = require('jwt-decode');
const loginUrl = routes.serverLogin;


const invisibleClass = "white";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            redirect:false,
            isResponseValid:true,
            isLoaded:true,
        }
    }

    inputHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    };

    buttonHandler = (event) => {
        event.preventDefault();
        axios.post(loginUrl, {email:this.state.email,password:this.state.password})
            .then((res) => {
                if(res.data == null) {
                    this.setState({isResponseValid: false, isLoaded:true});
                    return;
                }

                const user = jwtDecode(res.data.token);
            this.logInUser('id', user.id);
                localStorage.setItem('img', user.photo);
            this.setState({redirect:true})
            });
    };

    logInUser = (name,id) => {
        localStorage.setItem(name, id);
    };


    render() {
        let state = this.state;
        if(!state.isLoaded) {
            return(<div className="loader"> </div>)
        }
        if(state.redirect) {
            return <Redirect to="../../"/>
        }

        return (
                <form>
                    <div className="login-container">
                        <img src={require('../Logo/logo.png')} alt="InterLink"/>
                        <h3>Please sign in</h3>
                        {this.state.isResponseValid?<div className="white"></div>:
                            <span className={"warning"}>Incorrect email or password</span>
                        }

                        <input value={state.email} onChange={this.inputHandler} type="email" name="email" placeholder="Email"/>
                        <input value={state.password} onChange={this.inputHandler}
                               type="password" name="password" placeholder="Пароль"/>
                        <a href='./registration'>Зареєструватися?</a>
                        <button type="submit" onClick={this.buttonHandler} className="btn btn-outline-info">Увійти</button>
                    </div>
                </form>
        );

    }

}

export default Login;