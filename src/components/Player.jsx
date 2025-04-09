import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [inputName, setInputName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  function handleClick() {
    setInputName(playerName.current.value);
    playerName.current.value="";
  }

  // function handleChange(e) {
  //   setInputName(e.target.value);
  //   setSubmitted(false);
  // }

  return (
    <section id="player">
      <h2>Olá{(inputName && inputName !== "") ? `, ${inputName}` : ""}!</h2>
      <p>
        {/* <input ref={playerName} type="text" onChange={handleChange} value={playerName} /> */}
        <input ref={playerName} type="text" placeholder="digite aqui seu nome" />
        <button onClick={handleClick}>CONFIRMAR</button>
        
      </p>
    </section>
  );
}
