import React from 'react'
import {ConnectedRouter} from 'connected-react-router'
import {connect} from 'react-redux'
import Routes from './routes'
import 'typeface-roboto'

class App extends React.Component {

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Routes authenticated={this.props.authenticated}/>
            </ConnectedRouter>
        )
    }
};

const mapStateToProps = (state) => ({
    authenticated: state.user.user !== null
});

export default connect(mapStateToProps, null)(App);
