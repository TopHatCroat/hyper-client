import React from 'react'
import {Route, Switch} from 'react-router'
import Home from '../containers/home'
import About from '../containers/about'
import Login from '../containers/login'
import NavBar from '../containers/navbar'
import AuthRoute from "./authRoute";

class Routes extends React.Component {

    render() {
        return (
            <div>
                {this.props.authenticated && <NavBar/>}
                <Switch>
                    <AuthRoute exact path="/" component={Home} authenticated={this.props.authenticated}/>
                    <AuthRoute path="/about" component={About} authenticated={this.props.authenticated}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;
