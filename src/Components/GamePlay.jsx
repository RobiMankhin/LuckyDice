import { useState } from "react";
import RollDice from "./RollDice";

const GamePlay = () => {
  const arrValue = [1, 2, 3, 4, 5, 6];
  const [select, setSelect] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const generaterandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const errorMessage = (value) => {
    setSelect(value);
    setError("");
  };

  const roll = () => {
    if (!select) {
      setError("Select a Number first!");
      return;
    }

    const randomNumber = generaterandomNumber(1, 7);
    setCurrentDice(() => randomNumber);

    if (randomNumber === select) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelect(undefined);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto relative  justify-between">
        <div className="flex  justify-between ">
          <div className="ml-12 w-44 flex flex-col items-center">
            <h1 className="font-semibold mt-2 text-4xl lg:text-7xl">{score}</h1>
            <p className="font-semibold text-xl lg:text-2xl">Total Score</p>

            <p className="font-semibold  text-red-700 mt-4">{error}</p>
          </div>
          <div className="flex flex-col  items-center md:mr-10 ">
            <p className="font-semibold text-lg md:text-xl text-center mb-3 mt-12">
              Select a number
            </p>
            <div className="flex flex-col md:flex-row gap-1 lg:flex-col  ">
              {arrValue.map((value, i) => (
                <div
                  className="font-semibold text-3xl flex  items-center justify-center mt-1 h-14 w-12 md:w-16 border-black border-[2px] hover:bg-neutral-400 rounded-md border-solid duration-300"
                  key={i}
                  onClick={() => errorMessage(value)}
                  style={
                    select === value
                      ? { backgroundColor: "black", color: "white" }
                      : { backgroundColor: "" }
                  }
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" absolute top-36 lg:top-28 left-2 lg:left-96 lg:right-96">
          <RollDice
            currentDice={currentDice}
            roll={roll}
            error={error}
            score={score}
            setScore={setScore}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
