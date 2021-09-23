import React from 'react';
import Die from "./Die";

export default function Dice({ dice, handleClick, locked, disabled, rolling }) {
    return (
        <div style={{ marginTop: "10px" }} >
            {dice.map((d, idx) => (
                <Die
                    handleClick={handleClick}
                    val={d}
                    locked={locked[idx]}
                    idx={idx}
                    key={idx}
                    disabled={disabled}
                    rolling={rolling && !locked[idx]}
                />
            ))}
        </div>
    )
}
