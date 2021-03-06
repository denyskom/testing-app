import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main/Main';
import store from './store'
import {setAuthToken} from './config/axios';
import jwt_decode from 'jwt-decode';
import {logOutUser, loadCurrentUser} from './actions/authActions';
import {loadActivities} from './actions/activitiesActions';
import routes from './components/Main/Routes'

if(localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    const currentTime = Date.now() / 1000;

    if(decoded.exp > currentTime) {
        setAuthToken(localStorage.jwtToken);
        console.log(window.location.href);
        store.dispatch(loadCurrentUser());

    }

    if(decoded.exp < currentTime) {
        store.dispatch(logOutUser());
        window.location.href = `../../${routes.appLoginRelative}`
    }
}

store.dispatch(loadActivities());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Main/>
                    </BrowserRouter>
                </div>
            </Provider>

        );
    }
}

export default App;
