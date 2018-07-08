import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles/index";
import withRoot from "../../withRoot";

const styles = {};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Welcome home!</p>
                <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(withRoot(withStyles(styles)(Home)))
