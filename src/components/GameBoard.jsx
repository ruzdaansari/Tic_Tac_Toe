import { useState } from "react"
import Log from "./Log";

// let initialGameBoard = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ]

export default function GameBoard({onSelectSquare,board}){

    // let gameBoard = initialGameBoard;

    // console.log(turns,"turnssssssssss")
    // turns.forEach(element => {
    //     const {square,player} = element;
    //     const {row,col} = square;

    //     gameBoard[row][col] = player
    // });
    // const [gameBoard,setGameBoard] = useState(initialGameBoard);

    // const handleSquareClick =(rowIndex,colIndex)=>{
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard = [...prevGameBoard.map((innerArray=>[...innerArray]))];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayer;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {board.map((row,rowIndex)=> <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol,colIndex)=> <li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>)}</ol>
            </li>)}

        </ol>
    )
}