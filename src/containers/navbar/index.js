import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {connect} from "react-redux";
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Icon from "@material-ui/core/es/Icon/Icon";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        margin: 0,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    flex: {
        flex: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: 240,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

const menuItems = [
    {
        icon: 'home',
        text: 'Home',
        link: '/',
    }, {
        icon: 'info',
        text: 'About',
        link: '/about',
    }
];

const profileItems = [
    {
        icon: 'person',
        text: 'Profile',
        link: '/profile',
    }, {
        icon: 'exit_to_app',
        text: 'Logout',
        link: '/logout',
    }
];

const generateItem = (menuItem) => {
    return (
        <Link to={menuItem.link}>
            <ListItem button>
                <ListItemIcon>
                    <Icon>{menuItem.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={menuItem.text}/>
            </ListItem>
        </Link>
    )
};

class NavBar extends React.Component {
    state = {
        authenticated: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };


    render() {
        const {classes} = this.props;
        const {authenticated, anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        {authenticated && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}/>
                    <List>{menuItems.map(generateItem)}</List>
                    <Divider/>
                    <List>{profileItems.map(generateItem)}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.user.user !== null
});

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(NavBar))
