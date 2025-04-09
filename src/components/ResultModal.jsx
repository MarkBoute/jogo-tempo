import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import ScoreStars from "./ScoreStars.jsx";

export default function ResultModal({
  ref,
  score,
  targetTime,
  newRecord,
  onReset,
}) {
  const dialog = useRef();
  const gameOver = targetTime-score <= 0;

  useImperativeHandle(ref, () => {
    return {
      openFunction() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>
        {gameOver ? "Passou do tempo..." : "Parabéns"}
        {newRecord && <span className="new-record"><br/>Novo recorde</span>}
      </h2>
      {!gameOver && (
        <p>
          <ScoreStars score={score} targetScore={targetTime} />
          Seu tempo foi : <strong>{score / 1000}s</strong>
        </p>
      )}
      <form method="dialog" onSubmit={onReset}>
        <button>Voltar</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
