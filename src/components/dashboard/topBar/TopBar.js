import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/styles";
import {AppBar, Box, Button, colors, Hidden, IconButton, Toolbar} from "@material-ui/core";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import logoImg from "../../../assets/logo_lr_mono.svg";

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: "none !important",
        zIndex: "" + (theme.zIndex.appBar + 99) + " !important"
    },
    flexGrow: {
        flexGrow: 1
    },
    search: {
        borderRadius: 4,
        flexBasis: 300,
        height: 36,
        padding: theme.spacing(0, 2),
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd"
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        color: "inherit"
    },
    searchInput: {
        flexGrow: 1,
        color: "inherit",
        "& input::placeholder": {
            opacity: 1,
            color: "inherit"
        }
    },
    searchPopper: {
        zIndex: theme.zIndex.appBar + 100
    },
    searchPopperContent: {
        marginTop: theme.spacing(1)
    },
    trialButton: {
        marginLeft: theme.spacing(2),
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        "&:hover": {
            backgroundColor: colors.green[900]
        }
    },
    trialIcon: {
        marginRight: theme.spacing(1)
    },
    notificationsButton: {
        marginLeft: theme.spacing(1)
    },
    notificationsBadge: {
        backgroundColor: colors.orange[600]
    },
    logoutButton: {
        marginLeft: theme.spacing(1)
    },
    logoutIcon: {
        marginRight: theme.spacing(1)
    },
    language: {
        color: theme.palette.secondary.dark,
        "& .MuiButton-endIcon": {
            marginLeft: 0
        }
    },
    toolbar: {
        justifyContent: "space-between"
    }
}));

const TopBar = props => {
    const {handleNavBarMobile, className, onLogout, ...rest} = props;

    const classes = useStyles();

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="inherit"
        >
            <Toolbar className={classes.toolbar}>

                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={handleNavBarMobile}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                <Box>
                    <img
                        alt="Laboratoires Réunis"
                        src={logoImg}
                    />
                </Box>
                <Hidden mdDown>
                    <div className={classes.flexGrow}/>
                </Hidden>
                <Box>
                    <Hidden mdDown>
                        <Button
                            className={classes.logoutButton}
                            color="primary"
                            variant="contained"
                            onClick={onLogout}
                        >
                            <InputIcon className={classes.logoutIcon}/>
                            Sign out
                        </Button>
                    </Hidden>
                    <Hidden lgUp>
                        <IconButton
                            color="secondary"
                            onClick={onLogout}
                        >
                            <InputIcon/>
                        </IconButton>
                    </Hidden>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    className: PropTypes.string,
    onOpenNavBarMobile: PropTypes.func,
    logoUrl: PropTypes.string
};

export default TopBar;
