import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'



class Login extends Component {


    render() {
        return (
            <div className="custom-container">
                <form>
                    <div className="login-container">
                        <h3>Please sign in</h3>
                        <div className="inner-item">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="inner-item">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );

    }

}

export default Login;