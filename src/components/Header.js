import { Typography } from '@material-ui/core'
import React from 'react'
import logo from "../style/dice.png"

export default function Header({ highScore }) {

    return (
        <div style={{ width: "100%", backgroundColor: "lightblue", display: "flex", flexDirection: "row", padding: "10px" }} >
            <img src={logo} alt="logo" style={{ width: "30px", height: "30px" }} />
            <Typography variant="button" display="block" style={{ marginLeft: "10px", fontSize: "20px" }} >
                Yatzy Game
            </Typography>
            <Typography style={{ position: "absolute", right: "10px", justifyContent: "center", alignItems: "center" }} >
                High Score: {Math.max(...highScore, 0)}
            </Typography>
        </div >
    )
}
