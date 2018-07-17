import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from "./Login/Login";
import Head from "./Main/Head";
import Main from "./Main/Main";



class App extends Component {
  render() {
    return (
      <div className="App">

          <BrowserRouter>
              <Main/>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
