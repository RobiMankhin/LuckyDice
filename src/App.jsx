import { useState } from "react";
import StartPage from "./Components/StartPage";
import GamePlay from "./Components/GamePlay";

function App() {
  const [startGame, setStartGame] = useState(true);
  const toggleToPlay = () => {
    setStartGame(!startGame);
  };
  return <>{startGame ? <StartPage toggle={toggleToPlay} /> : <GamePlay />}</>;
}

export default App;
