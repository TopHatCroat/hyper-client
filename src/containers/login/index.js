import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {clearError, tryLogin} from "../../modules/user";
import {Redirect} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles/index";
import withRoot from "../../withRoot";
import Typography from '@material-ui/core/Typography';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';

const styles = {
    errorMessage: {
        color: '#992020',
    },
    loginContainer: {
        backgroundColor: '#992099',
    }
};

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onUsernameChange.bind(this);
        this.onPasswordChange.bind(this);
    }

    onUsernameChange = (event, text) => {
        this.setState({
            ...this.props,
            username: event.target.value,
        })
    };

    onPasswordChange = (event, text) => {
        this.setState({
            ...this.props,
            password: event.target.value,
        })
    };

    onLoginClicked = () => {
        this.props.tryLogin(this.state.username, this.state.password);
    };

    render() {

        if (this.props.isLoggedIn === true) {
            if (this.state != null )
                return <Redirect to={this.state.from} />

            return <Redirect to={'/'}/>
        }

        return (
            <Dialog
                open
                onRequestClose={this.props.isLoggedIn}
                fullScreen={false}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occationally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={(e, v) => this.onUsernameChange(e, v) }
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={this.props.password}
                        onChange={(e, v) => this.onPasswordChange(e, v) }
                    />
                    <Typography variant="body2" gutterBottom>
                        {this.props.message}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onLoginClicked} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
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
)(withStyles(styles)(Login))
