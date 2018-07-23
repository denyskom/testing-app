import React, { Component } from 'react';
import './Login.css'



class Login extends Component {


    render() {
        return (
                <form>
                    <div className="login-container">
                        <img src={require('../Logo/logo.png')} alt="InterLink"/>
                        <h3>Please sign in</h3>
                        {/*<label htmlFor="exampleInputEmail1">Email address</label>*/}
                        <input type="email"
                               aria-describedby="emailHelp" placeholder="Email"/>
                        {/*<label htmlFor="exampleInputPassword1">Password</label>*/}
                        <input type="password" id="exampleInputPassword1"
                               placeholder="Пароль"/>
                        <a href='./registration'>Зареєструватися?</a>
                        <button type="submit" className="btn btn-outline-info">Увійти</button>
                    </div>
                </form>
        );

    }

}

export default Login;