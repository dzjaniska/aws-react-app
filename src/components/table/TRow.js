import React, {useState} from 'react'
import {TableRow} from "@material-ui/core";
import CustomTableCell from "./TCell";
import {get} from "lodash";

const TRow = ({className, columns, row}) => {
    const [hover, setHover] = useState(false);

    return <TableRow hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {columns.map(col => {
            const value = get(row, col.name);
            return <CustomTableCell key={col.name} className={`${col.className} ${className ?? ""}`}>
                {col.render ? col.render(value, row) : value}
            </CustomTableCell>;
        })}
    </TableRow>
};

export default TRow;
