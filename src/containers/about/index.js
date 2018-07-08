import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles/index";
import withRoot from "../../withRoot";

const styles = {};

const About = props => (
    <div>
        <h1>About Us</h1>
        <p>Hello You!</p>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/home')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(withRoot(withStyles(styles)(About)))
