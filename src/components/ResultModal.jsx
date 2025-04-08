import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const gameOver = remainingTime <= 0;
  const formattedRemainingTime = (targetTime - (remainingTime / 1000)).toFixed(2);
  const score = (1 - (remainingTime / targetTime) * 1000) * 100;

  useImperativeHandle(ref, () => {
    return {
      openFunction() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>{gameOver ? "O tempo acabou..." : "Parabéns!"}</h2>
      <p>
        
      </p>
      <p>
        {!gameOver && <>O objetivo era : <strong>{targetTime} s</strong><br/>
          Seu tempo foi : <strong>{formattedRemainingTime} s</strong></>}
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Voltar</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
