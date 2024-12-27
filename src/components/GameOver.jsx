export default function GameOver({winner,handleRematchClick}){

    return (
        <ol id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} won</p>}
            {!winner && <p>It's a Draw.</p>}
            <button onClick={handleRematchClick}>Rematch</button>
        </ol>
    )
}