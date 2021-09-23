import { Paper, Table, TableBody } from '@material-ui/core';
import React from 'react';
import RuleRow from "./RuleRow";
import { makeStyles } from "@material-ui/core"
import {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance
} from './Rules';

const useStyles = makeStyles({
    tableBody: {
        width: "600px",
        backgroundColor: "lightblue",
        margin: "auto"
    }
})

export default function ScoreTable({ scores, doScore }) {

    const classes = useStyles();

    return (
        <Table component={Paper} className={classes.tableBody}>
            <TableBody >
                <RuleRow
                    name='Ones'
                    score={scores.ones}
                    description={ones.description}
                    doScore={evt => doScore('ones', ones.evalRoll)}
                />
                <RuleRow
                    name='Twos'
                    score={scores.twos}
                    description={twos.description}
                    doScore={evt => doScore('twos', twos.evalRoll)}
                />
                <RuleRow
                    name='Threes'
                    score={scores.threes}
                    description={threes.description}
                    doScore={evt => doScore('threes', threes.evalRoll)}
                />
                <RuleRow
                    name='Fours'
                    score={scores.fours}
                    description={fours.description}
                    doScore={evt => doScore('fours', fours.evalRoll)}
                />
                <RuleRow
                    name='Fives'
                    score={scores.fives}
                    description={fives.description}
                    doScore={evt => doScore('fives', fives.evalRoll)}
                />
                <RuleRow
                    name='Sixes'
                    score={scores.sixes}
                    description={sixes.description}
                    doScore={evt => doScore('sixes', sixes.evalRoll)}
                />
                <RuleRow
                    name='Three of Kind'
                    score={scores.threeOfKind}
                    description={threeOfKind.description}
                    doScore={evt => doScore('threeOfKind', threeOfKind.evalRoll)}
                />
                <RuleRow
                    name='Four of Kind'
                    score={scores.fourOfKind}
                    description={fourOfKind.description}
                    doScore={evt => doScore('fourOfKind', fourOfKind.evalRoll)}
                />
                <RuleRow
                    name='Full House'
                    score={scores.fullHouse}
                    description={fullHouse.description}
                    doScore={evt => doScore('fullHouse', fullHouse.evalRoll)}
                />
                <RuleRow
                    name='Small Straight'
                    score={scores.smallStraight}
                    description={smallStraight.description}
                    doScore={evt => doScore('smallStraight', smallStraight.evalRoll)}
                />
                <RuleRow
                    name='Large Straight'
                    score={scores.largeStraight}
                    description={largeStraight.description}
                    doScore={evt => doScore('largeStraight', largeStraight.evalRoll)}
                />
                <RuleRow
                    name='Yahtzee'
                    score={scores.yahtzee}
                    description={yahtzee.description}
                    doScore={evt => doScore('yahtzee', yahtzee.evalRoll)}
                />
                <RuleRow
                    name='Chance'
                    score={scores.chance}
                    description={chance.description}
                    doScore={evt => doScore('chance', chance.evalRoll)}
                />
            </TableBody>
        </Table>
    )
}
