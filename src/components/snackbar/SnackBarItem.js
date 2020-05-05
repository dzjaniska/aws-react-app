import React, {Component} from 'react';
import "./SnackBar.scss"
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import IconButton from '@material-ui/core/IconButton';

class SnackBarItem extends Component {

    state = {
        open: true
    };

    close = (event, type) => {
        if (type === 'clickaway') {
            return;
        }
        this.setState({open: false}, () => {
            if (this.props.close) {
                this.props.close();
            }
        });
    };

    render() {
        let Icon;
        const variant = this.props.variant || 'info';
        switch (variant) {
            case 'success':
                Icon = CheckCircleIcon;
                break;
            case 'warning':
                Icon = WarningIcon;
                break;
            case 'error':
                Icon = ErrorIcon;
                break;
            default:
                Icon = InfoIcon;
        }

        return <Snackbar open={this.state.open}
                         className={"snackbar snackbar-" + this.props.index}
                         anchorOrigin={{
                             vertical: 'bottom',
                             horizontal: 'left',
                         }}
                         autoHideDuration={this.props.duration}
                         onClose={this.close}>
            <SnackbarContent
                className={variant}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={"snackbar-message"}>
                            <Icon className={"snackbar-icon"}/>
                            <span className={"snackbar-text"}>{this.props.message}</span>
                        </span>
                }
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={this.close}>
                        <CloseIcon className={"snackbar-icon"}/>
                    </IconButton>
                ]}/>
        </Snackbar>
    }
}

export default SnackBarItem;
