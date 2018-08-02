import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from "./Main/Main";
import store from './store'


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
