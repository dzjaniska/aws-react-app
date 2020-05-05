import React from 'react'
import {TableSortLabel} from "@material-ui/core";
import CustomTableCell from "./TCell";
import {SORT_DIRECTION} from "../../utils/Constants";

const THead = ({columns, sort: {sortBy, sortDirection}, onSort, className}) =>
    <>
        {columns.map(col =>
            <CustomTableCell key={col.name} className={`${col.className} ${className}`}>
                <TableSortLabel
                    active={col.name === sortBy}
                    direction={sortDirection === SORT_DIRECTION.ASC ? 'asc' : 'desc'}
                    onClick={() => onSort(col.name,
                        sortDirection === SORT_DIRECTION.ASC
                            ? SORT_DIRECTION.DESC
                            : SORT_DIRECTION.ASC)}>
                    {col.headRender ? col.headRender() : col.label}
                </TableSortLabel>
            </CustomTableCell>)}
    </>;

export default THead;
