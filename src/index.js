import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {configureStore} from "./redux";
import initialSate from "./redux/initialState";
import {Provider} from "react-redux";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import MomentUtils from "@date-io/moment";
import theme from './theme';
import {ThemeProvider} from '@material-ui/styles';
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
const store = configureStore(initialSate);

ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <App/>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    </Provider>
), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
