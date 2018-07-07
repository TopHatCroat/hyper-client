import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {clearError, tryLogin} from "../../modules/user";
import {Redirect} from "react-router-dom";

const styles = {
    errorMessage: {
        backgroundColor: '#992020',
        textColor: '#ffffff'
    }
};

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.onUsernameChange.bind(this);
        this.onPasswordChange.bind(this);
    }

    onUsernameChange = (event) => {
        this.props = {
            ...this.props,
            username: event.target.value,
        }
    };

    onPasswordChange = (event) => {
        this.props = {
            ...this.props,
            password: event.target.value,
        }
    };

    render() {

        if (this.props.isLoggedIn === true) {
            if (this.state != null )
                return <Redirect to={this.state.from} />

            return <Redirect to={'/'}/>
        }

        return (
            <div>
                <h1>Login</h1>
                <div id="login">
                    <input type="name" id="email" placeholder="Username" onChange={this.onUsernameChange}/>
                    <input type="password" id="password" placeholder="Password"
                           onChange={this.onPasswordChange}/>
                    <button id="send" onClick={() => this.props.tryLogin(this.props.username, this.props.password)}>Send</button>
                    <text style={styles.errorMessage}>{this.props.message}</text>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about'),
    tryLogin,
    clearError
}, dispatch);

const mapStateToProps = state => ({
    isLoggedIn: state.user.user !== null,
    message: state.user.message,
    isError: state.user.isError,
    isLoading: state.user.isLoading,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
