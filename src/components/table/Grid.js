import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import THead from "./THead";
import TRow from "./TRow";
import {CircleLoader} from "../loader/CircleLoader";
import PerfectScrollbar from 'react-perfect-scrollbar';
import {SORT_DIRECTION} from "../../utils/Constants";
import Pagination from "./Pagination";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        overflow: "hidden",
        height: "100%"
    },
    table: {
        height: "100%",
        "& .MuiTableRow-root:last-of-type .MuiTableCell-root": {
            borderBottom: "none"
        }
    },
    content: {
        padding: 0
    },
    author: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        marginRight: theme.spacing(1)
    },
    tags: {
        '& > * + *': {
            marginLeft: theme.spacing(1)
        }
    },
    actions: {
        justifyContent: 'flex-end'
    },
    arrowForwardIcon: {
        marginLeft: theme.spacing(1)
    },
    header: {
        backgroundColor: "#e7eff9",
        color: theme.palette.text.primary,
        padding: "4px 16px",
        fontSize: "13px",
        borderBottom: "none"
    },
    body: {
        padding: theme.spacing(2),
        color: "#333333"
    },
    empty: {
        textAlign: "center"
    }
}));

const Grid = ({columns, data, total, pagination, onChange, loadInProgress}) => {
    const classes = useStyles();
    const [sort, setSort] = useState({
        sortDirection: SORT_DIRECTION.ASC,
        sortBy: ""
    });

    const onSort = (sortBy, sortDirection) => {
        setSort({sortDirection, sortBy});
        return onChange?.({...pagination, sort: `${sortBy},${sortDirection}`});
    };

    const onGridChange = (pagination) =>
        onChange?.({
            ...pagination,
            sort: pagination.sort ?? `${sort.sortBy},${sort.sortDirection}`
        });

    return <>
        <TableContainer className={classes.root}>
            <CircleLoader show={!!loadInProgress}/>
            <PerfectScrollbar>
                <Table stickyHeader className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <THead columns={columns}
                                   sort={sort}
                                   onSort={onSort}
                                   className={classes.header}/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(data.length > 0) ?
                            data.map((row, index) =>
                                <TRow key={index}
                                      row={row}
                                      columns={columns}
                                      className={classes.body}/>)
                            :
                            <TableRow>
                                <TableCell colSpan={columns.length} className={classes.empty}>
                                    {loadInProgress ? "" : "No data"}
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </PerfectScrollbar>
        </TableContainer>
        {pagination &&
        <Pagination page={pagination.page}
                    size={pagination.size}
                    onChange={onGridChange}
                    total={total || data?.length}/>
        }
    </>
};

export default Grid;
