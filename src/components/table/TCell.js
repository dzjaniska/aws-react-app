import withStyles from "@material-ui/core/styles/withStyles";
import {TableCell} from "@material-ui/core";

const CustomTableCell = withStyles(theme => ({
    root: {
        padding: 10
    },
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

export default CustomTableCell;

