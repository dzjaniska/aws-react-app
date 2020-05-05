import React from "react";
import Container from "@material-ui/core/Container";
import RdvList from "./rdvList/RdvList";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: `${theme.spacing(3)}px auto`
    }
}));

const Registration = () => {
    const classes = useStyles();

    return (
        <Container classes={classes}>
            <Card>
                <RdvList/>
            </Card>
        </Container>
    )
};

export default Registration;
