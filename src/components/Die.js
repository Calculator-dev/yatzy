import { makeStyles } from '@material-ui/core';
import React from 'react';

const numberWords = ["one", "two", "three", "four", "five", "six"];

const useStyles = makeStyles({
    root: {
        marginRight: "10px",
        fontSize: "60px",
        cursor: "pointer",
        color: "darkblue"
    },
    locked: {
        color: "#7393B3"
    },
    rolling: {
        color: "darkblue"
    }

})

export default function Die({ locked, handleClick, val, idx, disabled, rolling }) {

    const diceClasses = useStyles();

    const handleClicked = () => {
        handleClick(idx);

    }

    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5px`
    if (locked) classes += " " + diceClasses.locked;
    if (rolling) classes += " " + diceClasses.rolling;

    return <i className={[classes + " " + diceClasses.root]} onClick={handleClicked} disabled={disabled} />
}
