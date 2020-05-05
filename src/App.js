import React from 'react';
import {Route, Router} from 'react-router-dom'
import './App.scss';
import Dashboard from "./components/dashboard/Dashboard";
import {createBrowserHistory} from 'history';
import Registration from "./pages/registration/Registration";
import SnackBar from "./components/snackbar/SnackBar";
import {Auth} from 'aws-amplify';
import {withAuthenticator} from "@aws-amplify/ui-react";
import {style} from "./theme/login/loginForm";

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Dashboard onLogout={() => Auth.signOut()}>
                <Route exact path='/registration' component={Registration}/>
            </Dashboard>
            <SnackBar/>
        </Router>
    );
};

export default withAuthenticator(App, style);


