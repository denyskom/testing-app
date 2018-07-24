import Head from "./Head"
import React, { Component } from 'react';
import './Main.css'
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import ActivityPresentationList from "../Activity/ActivityPresentationList";
import Person from "../Person/Person";
import FullActivity from "../Activity/FullActivity";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";



const main = () => {
    return(
        <div>
            <Route path="/" exact render={() => <Redirect to={"./home"}/>}/>
            <Route path="/home/" component={Head}/>

            <Route path="/home"  render={
                () =>
                    <div className="under-header">
                    <main className="custom-container">
                        <Route path="/home" exact component={ActivityPresentationList}/>
                        <Route path="/home/people" exact component={Person}/>
                        <Route path="/home/people/:id" exact component={Person}/>
                        <Route path="/home/activities/:id" exact component={FullActivity}/>
                    </main>
                </div>
            }/>
            <Route path="/index"  render={() =>
                <div className="blank">
                    <Route path="/index/registration" exact component={Registration}/>
                    <Route path="/index/login" exact component={Login}/>
                </div>
            }/>

        </div>

    );
};

export default main;

