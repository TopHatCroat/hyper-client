import React from "react";
import {Redirect, Route} from "react-router";

class AuthRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.authenticated) {
            return <Redirect to={{
                pathname: '/login',
                state: {from: this.props.location}
            }}/>
        } else
            return this.props.renderOther()
    }
}


export default AuthRoute;
