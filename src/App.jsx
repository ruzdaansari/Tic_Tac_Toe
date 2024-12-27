import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
    X:"Player 1",
    O:"Player 2"
}
let initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function boardHandling(gameTurns){
  let gameBoard = [...initialGameBoard.map((innerArray)=>[...innerArray])];
  gameTurns.forEach(element => {
        const {square,player} = element;
        const {row,col} = square;

        gameBoard[row][col] = player
    });

  return gameBoard;
}
function derivedActivePlayer(gameTurns){
  let currentPlayer = "X";

  if(gameTurns.length> 0 && gameTurns[0].player === "X"){

    currentPlayer = "O"
  }

  return currentPlayer;
}

function handleWinner(gameBoard,players){
  let winner;
  WINNING_COMBINATIONS.forEach((combination)=>{
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];;
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];;
    // console.log( gameBoard[combination[0].row][combination[0].column],"checkingggggggggg",combination);
    
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol]
    }
  });

  return winner
}

function App() {
  const [gameTurns,setGameTurns] = useState([]);
  const [players,setPlayers] = useState(PLAYERS);
  // const [activePlayer,setActivePlayer] = useState("X");

  const activePlayer = derivedActivePlayer(gameTurns);

  

    const gameBoard = boardHandling(gameTurns)
    const winner = handleWinner(gameBoard,players)
    let hasDraw = gameTurns.length === 9 && !winner
  const handleSelectSquare = (rowIndex,colIndex)=>{
    // setActivePlayer((currActivePlayer)=> currActivePlayer === "X" ? "O" :  "X");
    setGameTurns((prevTurn)=>{

      // let currentPlayer = "X";

      // if(prevTurn.length> 0 && prevTurn[0].player === "X"){

      //   currentPlayer = "O"
      // }
      const currentPlayer = derivedActivePlayer(prevTurn);
      const updatedTurns = [{square:{row:rowIndex, col:colIndex},player:currentPlayer},...prevTurn];
      return updatedTurns
    })
  }

  const handleRematchClick = () =>{
    setGameTurns([]);
  }

  const onChangeName = (symbol,playerName) =>{
    // console.log(playerName,"on change calledddd",symbol);
    
    setPlayers((prevPlayer)=>{
      return {
        ...prevPlayer,
        [symbol]:playerName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
      {console.log(gameTurns[0],"game tursnnsssssssss")
        }
        <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer==="X"} onChangeName={onChangeName}/>
        <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer==="O"} onChangeName={onChangeName}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} handleRematchClick={handleRematchClick}/>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
