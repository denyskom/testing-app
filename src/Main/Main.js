import Head from "./Head"
import React, {Component} from 'react';
import './Main.css'
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import ActivityPresentationList from "../Activity/ActivityPresentationList";
import Person from "../Person/Person";
import FullActivity from "../Activity/FullActivity";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Logout from "../Login/Logout";
import routes from '../Main/Routes';
import store from '../store';



class Main extends Component {
    render() {
        return(
            <div>
                <Route path="/" exact render={() => <Redirect to={`./${routes.appHomeRelative}`}/>}/>
                <Route path={`/${routes.appHomeRelative}/`} component={Head}/>

                <Route path={`/${routes.appHomeRelative}`}  render={
                    () =>
                        <div className="under-header">
                            <main className="custom-container">
                                <Route path={`/${routes.appHomeRelative}`} exact component={ActivityPresentationList}/>
                                <Route path={`/${routes.appPeopleRelative}`} exact component={Person}/>
                                <Route path={`/${routes.appPeopleRelative}/:id`} exact component={Person}/>
                                <Route path={`/${routes.appActivitiesRelative}/:id`}  exact component={FullActivity}/>
                            </main>
                        </div>
                }/>
                <Route path={`/${routes.appIndexRelative}`}  render={() =>
                    <div className="blank">
                        <Route path={`/${routes.appRegistrationRelative}`} exact
                               render={() => !store.getState().auth.isAuthenticated?<Registration/>:<Redirect to="../../"/>}/>
                        <Route path={`/${routes.appLoginRelative}`} exact
                               render={() => !store.getState().auth.isAuthenticated?<Login/>:<Redirect to="../../"/>}/>
                        <Route path={`/${routes.appLogoutRelative}`} exact component={Logout}/>
                    </div>
                }/>
            </div>

        );
    }
}


export default Main;

