import React from "react";
import {Redirect, Route} from "react-router";
import { object, bool, string, func } from 'prop-types';


export const AuthRoute = ({ component, exact = false, path, authenticated }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            authenticated ? (
                React.createElement(component, props)
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
            )
        )}
    />
);

export default AuthRoute;
