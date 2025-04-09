// import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      {/* <Player /> */}
      <div id="challenges">
        <TimerChallenge title="Fácil" targetTime={1000} />
        <TimerChallenge title="Normal" targetTime={2000} />
        <TimerChallenge title="Difícil" targetTime={3000} />
      </div>
    </>
  );
}

export default App;
