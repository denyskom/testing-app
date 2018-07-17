import Head from "./Head"
import React, { Component } from 'react';
import './Main.css'
import {Route} from 'react-router-dom';
import ActivityCard from "../Activity/ActivityCard";
import ActivityPresentationList from "../Activity/ActivityPresentationList";
import Person from "../Person/Person";



const main = () => {
    return(
        <div>
            <Head/>
            <div className="under-header">
                <main className="custom-container">
                    <Route path="/" exact component={ActivityPresentationList}/>
                    <Route path="/people" exact component={Person}/>
                </main>
            </div>
        </div>

    );
};

export default main;

