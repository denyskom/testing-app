import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from "./Routes";

const privateRoute = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        exact render={props =>
            auth.isAuthenticated?(<Component{...props}/>) :
                (<Redirect to={`../../${routes.appLoginRelative}`}/>)
        }
    />
);

const mapStateToProps = state => ({
   auth: state.auth
});



export default connect(mapStateToProps, null)(privateRoute)