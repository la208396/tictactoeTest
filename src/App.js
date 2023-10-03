import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);
    }

    return(
        <div className={"board"}>
            <div className={"board-row"}>
                <Square value={Square[0]} onSquareClick={handleClick(0)}></Square>
                <Square value={Square[1]} onSquareClick={handleClick(1)}></Square>
                <Square value={Square[2]} onSquareClick={handleClick(2)}></Square>
            </div>
            <div className={"board-row"}>
                <Square value={Square[3]} onSquareClick={handleClick(3)}></Square>
                <Square value={Square[4]} onSquareClick={handleClick(4)}></Square>
                <Square value={Square[5]} onSquareClick={handleClick(5)}></Square>
            </div>
            <div className={"board-row"}>
                <Square value={Square[6]} onSquareClick={handleClick(6)}></Square>
                <Square value={Square[7]} onSquareClick={handleClick(7)}></Square>
                <Square value={Square[8]} onSquareClick={handleClick(8)}></Square>
            </div>
        </div>
    );
}

function Square({value, onSquareClick}) {
    return(
    <button className="square" onClick={onSquareClick}>
        {value}
    </button>
    );
}

