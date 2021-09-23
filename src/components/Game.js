import { Button, CssBaseline, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Dice from './Dice';
import Header from './Header';
import ScoreTable from './ScoreTable';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

const useStlyes = makeStyles({
    root: {
        textAlign: "center",
        margin: "0 auto"
    },
    button: {
        margin: "10px 0"
    }
})

var counter = 0

export default function Game() {

    const classes = useStlyes();
    const [gameState, setGameState] = useState({
        dice: Array.from({ length: NUM_DICE }),
        locked: Array(NUM_DICE).fill(false),
        rollsLeft: NUM_ROLLS,
        rolling: false,
        endgame: false,
        scores: {
            ones: undefined,
            twos: undefined,
            threes: undefined,
            fours: undefined,
            fives: undefined,
            sixes: undefined,
            threeOfKind: undefined,
            fourOfKind: undefined,
            fullHouse: undefined,
            smallStraight: undefined,
            largeStraight: undefined,
            yahtzee: undefined,
            chance: undefined
        }
    });

    function roll() {
        setGameState(gs => ({
            ...gameState,
            dice: gs.dice.map((d, i) => gs.locked[i] ? d : Math.ceil(Math.random() * 6)),
            locked: gs.rollsLeft > 1 ? gs.locked : Array(NUM_DICE).fill(true),
            rollsLeft: gs.rollsLeft > 0 ? gs.rollsLeft - 1 : 0,
            rolling: false
        }))
    }

    useEffect(() => {
        animateRoll();
        // eslint-disable-next-line
    }, [gameState.scores])

    function animateRoll() {
        setGameState(() => ({
            ...gameState,
            rolling: true
        }));
        setTimeout(roll, 0)
    }

    function toggleLocked(idx) {
        if (gameState.rollsLeft > 0 && !gameState.rolling) {
            setGameState(gs => ({
                ...gameState,
                locked: [
                    ...gs.locked.slice(0, idx),
                    !gs.locked[idx],
                    ...gs.locked.slice(idx + 1)
                ]
            }));
        }
    }

    function doScore(ruleName, ruleFn) {
        setGameState(gs => ({
            ...gameState,
            scores: { ...gs.scores, [ruleName]: ruleFn(gameState.dice) },
            rollsLeft: NUM_ROLLS,
            locked: Array(NUM_DICE).fill(false),
        }));
        counter++;
    }

    function displayRollInfo() {
        const messages = [
            "0 Rolls left",
            "1 Roll Left",
            "2 Rolls Left",
            "Starting Round"
        ];
        return messages[gameState.rollsLeft]
    }

    function getTotalScore() {
        let totalScore = 0;
        for (let key in gameState.scores) {
            if (gameState.scores[key]) totalScore += gameState.scores[key];
        }
        return totalScore;
    }



    if (counter === 13) {
        localStorage.setItem("highScore", getTotalScore())
        localStorage.setItem("totalScore", getTotalScore())
    }

    const highScore = Object.values(localStorage).map(a => parseInt(a, 10));

    return (
        <div style={{ textAlign: "center" }}>
            <Header highScore={highScore} />
            <div>
                <Dice
                    dice={gameState.dice}
                    locked={gameState.locked}
                    handleClick={toggleLocked}
                    disabled={gameState.rollsLeft === 0}
                    rolling={gameState.rolling}
                />
            </div>
            <div className={classes.button}>
                <Button
                    variant="outlined"
                    color="primary"
                    disabled={
                        gameState.locked.every(x => x) ||
                        gameState.rollsLeft === 0 ||
                        gameState.rolling
                    }
                    onClick={animateRoll}
                >
                    {displayRollInfo()}
                </Button>
            </div>
            {counter === 13 &&
                <Button variant="outlined" color="primary" style={{ marginBottom: "10px" }} onClick={() => window.location.reload()}>Start New Game</Button>}
            <ScoreTable doScore={doScore} scores={gameState.scores} counter={counter} />
            <Typography variant="button" display="block" style={{ fontSize: "20px" }}>
                Total Score: {getTotalScore()}
            </Typography>
            <CssBaseline />
        </div>
    )
}