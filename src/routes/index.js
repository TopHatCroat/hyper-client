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
                <Switch>
                    <AuthRoute exact path="/" authenticated={this.props.authenticated}
                               renderOther={(props) =>
                               <NavBar {...props} authenticated={this.props.authenticated}>
                                   <Home {...props}/>
                               </NavBar>
                           }/>
                    <AuthRoute path="/about" authenticated={this.props.authenticated}
                           renderOther={(props) =>
                               <NavBar {...props} authenticated={this.props.authenticated}>
                                   <About {...props}/>
                               </NavBar>
                           }/>/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;
