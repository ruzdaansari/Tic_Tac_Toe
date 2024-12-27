import { useState } from "react"

export default function Player({initialName,symbol,isActive,onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [userEnteredName, setUserEnteredName] = useState(initialName)

    const editClickHandler = () =>{
        setIsEditing((prev)=> !prev);
        if(isEditing){
        onChangeName(symbol,userEnteredName)
        }
    }
     

    const handleInputClick = (e)=>{
        console.log(e.target.value,"checkinggg log");
        setUserEnteredName(e.target.value)
    }
    
    let playerName = <span className="player-name">{userEnteredName}</span>;

    if(isEditing){
        playerName = <input type="text" required value={userEnteredName} onChange={handleInputClick}></input>  // Two way binding - i.e using click handler we are assign new value and on the "value" attribute we are feeding new updated value on the same this is called two way binding
    }
    return (
        <li className={isActive ? "active" : undefined}>
          <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={editClickHandler}>{isEditing ? "Save":"Edit"}</button>
        </li>
    )
} 


