import React, {Component} from 'react';
import SnackBarItem from "./SnackBarItem";
import {Box} from "@material-ui/core";

export default class SnackBar extends Component {

    state = {
        snackbars: []
    };

    static instance;

    static error(snackbar) {
        return SnackBar.instance.add({...snackbar, variant: 'error'})
    }

    static info(snackbar) {
        return SnackBar.instance.add({...snackbar, variant: 'info'})
    }

    static success(snackbar) {
        return SnackBar.instance.add({...snackbar, variant: 'success'})
    }

    static warning(snackbar) {
        return SnackBar.instance.add({...snackbar, variant: 'warning'})
    }


    static remove(message) {
        return SnackBar.instance.remove(message)
    }

    increment = 0;

    componentDidMount() {
        SnackBar.instance = this;
        window.bars.push(this);
    }

    add(snackbar) {
        const newList = [...this.state.snackbars];
        snackbar.id = this.increment;
        this.increment++;
        newList.push(snackbar);
        this.setState({snackbars: newList});
        return snackbar;
    }

    close(index) {
        const newList = [...this.state.snackbars];
        newList.splice(index, 1);
        this.setState({snackbars: newList});
    }

    remove(message) {
        let list = [...this.state.snackbars];
        for (let i = 0; i < list.length; i++) {
            if (list[i] === message) {
                list.splice(i, 1);
                this.setState({snackbars: list});
                break;
            }
        }
    }

    render() {
        return <Box className={"snackbar-container"}>
            {this.state.snackbars.map((snackbar, index) => {
                return <SnackBarItem key={snackbar.id}
                                     index={index}
                                     message={snackbar.message}
                                     duration={snackbar.duration || 6000}
                                     close={() => this.close(index)}
                                     variant={snackbar.variant}
                />
            }).reverse()}
        </Box>
    }
}
window.bars = [];
