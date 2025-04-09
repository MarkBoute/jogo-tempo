import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
import ScoreStars from "./ScoreStars.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [remainingTime, setRemainingTime] = useState(targetTime);

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime;

  const score = (targetTime - remainingTime);

  const [bestScore, setBestScore] = useState(0);

  const newRecord = (score > bestScore && score < targetTime);

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.openFunction();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.openFunction();
    clearInterval(timer.current);
  }

  function handleReset() {
    if (newRecord) {
      setBestScore(score);
    }
    setRemainingTime(targetTime);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        score={score}
        newRecord={newRecord}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {(targetTime / 1000)} segundo{targetTime > 1000 ? "s" : ""}
        </p>
        <p>
          <ScoreStars score={bestScore} targetScore={targetTime} />
          Recorde: {bestScore / 1000}s
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "PARAR" : "INICIAR"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Contando..." : "Contador parado"}
        </p>
      </section>
    </>
  );
}
