import React from 'react';
import {TablePagination} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        boxSizing: "border-box",
        minHeight: theme.spacing(7),
        flexShrink: 0,
        "& .MuiSelect-select:focus": {
            backgroundColor: "transparent"
        }
    }
}));

const Pagination = ({total, page = 0, size = 10, className, onChange}) => {
    const classes = useStyles();
    const handleChangePage = (event, pageNumber) => onChange?.({page: pageNumber, size: size});
    const handleChangeRowsPerPage = (event) => onChange?.({page: page, size: parseInt(event.target.value)});

    return <TablePagination
        classes={classes}
        component="div"
        count={total || 0}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        className={className}

        rowsPerPage={size || 10}
        rowsPerPageOptions={[5, 10, 20, 50]}
    />
};

export default Pagination;
