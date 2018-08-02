import React, { Component } from 'react';
import './Login.css'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from "../actions/authActions";
import { withRouter } from 'react-router-dom';


const routes = require('../Main/Routes');




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            redirect:false,
            isResponseValid:true,
            isLoaded:true,
            errorMassage: 'Incorrect email or password'
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            console.log(nextProps.errors);
            this.setState({isResponseValid:false})
        }

        if(nextProps.auth.isAuthenticated) {
            this.setState({redirect:true})
        }
    }

    inputHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    };

    buttonHandler = (event) => {
        event.preventDefault();
        this.props.loginUser({email:this.state.email,password:this.state.password});
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
                            <span className={"warning"}>{this.state.errorMassage}</span>
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

const mapStateToProps = state => ({
    auth:state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{loginUser})(withRouter(Login));