import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Box} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import TopBar from "./topBar/TopBar";
import NavBar from "./navBar/NavBar";
import navigationConfig from "../../navigationConfig";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    topBar: {
        zIndex: 2,
        position: 'relative'
    },
    container: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        borderTop: '1px solid ' + theme.palette.divider
    },
    navBar: {
        zIndex: 3,
        width: 230,
        minWidth: 230,
        flex: '0 0 auto',
        backgroundColor: theme.palette.background.main || theme.palette.primary.main,
        '@media (max-width: 1279px)': {
            width: '100%'
        }
    },
    content: {
        overflowY: 'auto',
        flex: '1 1 auto',
        '-webkit-overflow-scrolling': 'touch'
    }
}));

const Dashboard = props => {
    const {navigation, user, onLogout} = props;
    const classes = useStyles();
    const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

    return (
        <Box className={classes.root}>
            <TopBar onLogout={onLogout}
                    className={classes.topBar}
                    handleNavBarMobile={() => setOpenNavBarMobile(!openNavBarMobile)}
            />
            <Box className={classes.container}>
                <NavBar className={classes.navBar}
                        onMobileClose={() => setOpenNavBarMobile(false)}
                        openMobile={openNavBarMobile}
                        navigationConfig={navigation ? navigation : navigationConfig}
                        user={user}
                />
                <main className={classes.content}>
                    <PerfectScrollbar options={{suppressScrollX: true}}>
                        {props.children}
                    </PerfectScrollbar>
                </main>
            </Box>
        </Box>
    );
};

Dashboard.propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
    onLogout: PropTypes.func,
};

export default Dashboard;
