import { makeStyles, TableBody, TableCell, TableRow } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    left: {
        width: "300px",
        textAlign: "left",
        cursor: "pointer",
    },
    right: {
        width: "300px",
        textAlign: "right",
        cursor: "pointer"
    },
    tableBody: {
        margin: "auto",
    }
})

export default function RuleRow({ doScore, name, score, description }) {

    const classes = useStyles();
    const disabled = score !== undefined;



    return (
        <TableBody className={classes.tableBody} >
            <TableRow
                className={`${disabled ? "disabled" : "active"}`}
                onClick={disabled ? null : doScore}>
                <TableCell className={classes.left}>{name}</TableCell>
                <TableCell className={classes.right}>{disabled ? score : description}</TableCell>
            </TableRow>
        </TableBody>
    )
}
