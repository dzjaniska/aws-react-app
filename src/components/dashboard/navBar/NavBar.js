import React, {Fragment} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/styles";
import {Divider, Drawer, Hidden, Paper, Typography} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import Navigation from "./Navigation";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        overflowY: "auto",
        boxShadow: "2px 2px 20px 0 rgba(0, 0, 0, 0.1)",
        border: "none",
        "@media (max-width: 1279px)": {
            boxShadow: "none"
        }
    },
    content: {
        padding: theme.spacing(2),
        "@media (max-width: 1279px) and (min-width: 600px)": {
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5)
        },
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    profile: {
        display: "flex",
        alignItems: "center",
        minHeight: "fit-content",
        color: theme.palette.white,
        "@media (min-width: 1280px)": {
            flexDirection: "column"
        }
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1),
        color: theme.palette.text.primary,
        wordBreak: "break-word"
    },
    bio: {
        marginTop: theme.spacing(1),
        color: theme.palette.secondary.light,
        "@media (max-width: 1279px)": {
            marginLeft: theme.spacing(2)
        }
    },
    divider: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.divider
    },
    navigation: {
        marginTop: theme.spacing(2),
        color: theme.palette.secondary.light
    },
    versions: {
        marginTop: "auto"
    },
    drawerRoot: {
        zIndex: 1000 + "!important"

    },
    drawerPaper: {
        borderTop: "1px solid " + theme.palette.divider,
        top: theme.spacing(8),
        "@media (max-width: 600px)": {
            top: theme.spacing(7)
        }

    }
}));

const NavBar = props => {
    const {openMobile, onMobileClose, navigationConfig, className, user, ...rest} = props;
    const classes = useStyles();

    const navbarContent = (
        <PerfectScrollbar options={{suppressScrollY: false}}>
            <div className={classes.content}>
                {user && <Hidden xsDown>
                    <div className={classes.profile}>
                        <Typography
                            className={classes.name}
                            variant="h4" color="inherit"
                        >
                            {user.first_name} {user.last_name}
                        </Typography>
                        <Typography variant="body2" color="inherit" className={classes.bio}>{user.bio}</Typography>
                    </div>
                </Hidden>
                }
                {user && <Divider className={classes.divider}/>}
                <nav className={classes.navigation}>
                    {navigationConfig.map((list, idx) => (
                        <Navigation
                            component="div"
                            key={"key_" + idx}
                            pages={list.pages}
                            title={list.title}
                        />
                    ))}
                </nav>
                {props.versions &&
                <Box className={classes.versions}>
                    {props.versions}
                </Box>}
            </div>
        </PerfectScrollbar>
    );

    return (
        <Fragment>
            <Hidden lgUp>
                <Drawer
                    classes={{root: classes.drawerRoot, paper: classes.drawerPaper}}
                    anchor="top"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    <div
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        {navbarContent}
                    </div>
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Paper
                    {...rest}
                    className={clsx(classes.root, className)}
                    elevation={1}
                    square
                >
                    {navbarContent}
                </Paper>
            </Hidden>
        </Fragment>
    );
};

NavBar.propTypes = {
    className: PropTypes.string,
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

export default NavBar;
