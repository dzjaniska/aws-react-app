import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-30px !important",
        marginTop: "-30px !important"
    },
    wrapper: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999
    },
    overlay: {
        backgroundColor: "black",
        opacity: 0.2,
        width: "100%",
        height: "100%",
        position: "relative"
    }
}));

export const CircleLoader = ({local, show}) => {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1)), 20);
        return () => clearInterval(timer);
    }, []);

    return (<>
            {show &&
            <Box className={classes.wrapper + (local ? " local" : "")}>
                <Box className={!local ? classes.overlay : ""}/>
                <CircularProgress className={classes.progress}
                                  variant="determinate"
                                  value={progress}/>
            </Box>
            }
        </>
    );
};
