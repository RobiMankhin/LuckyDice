import { useState } from "react";
import Rules from "./Rules";

const RollDice = ({ currentDice, roll, score, setScore }) => {
  const [showrules, setShowrules] = useState(true);
  const resetScore = () => {
    setScore(0);
  };
  return (
    <div className="flex flex-col ml-8 relative ">
      <div className="flex flex-col items-center ">
        <div className="cursor-pointer" onClick={roll}>
          <img
            className="w-48 lg:w-56"
            src={`/Img/dice_${currentDice}.png`}
            alt={`Dice ${currentDice}`}
          />
        </div>
        <h1 className="font-semibold">Click on Dice to Roll</h1>
      </div>

      <div className="flex flex-col items-center mr-0 mt-2 lg:mt-5">
        <button
          onClick={resetScore}
          className="bg-white hover:bg-black hover:text-white border-2 border-black transition-all duration-300 hover:border-black rounded-lg  text-black font-bold w-44 py-[4px] "
        >
          Reset Score
        </button>
        <button
          // onClick={() => setShowrules(!showrules)}
          onClick={() => setShowrules((prev) => !prev)}
          className="bg-black hover:bg-white hover:text-black border-2 transition-all duration-300 hover:shadow-lg rounded-lg  text-white font-bold px-5 py-[4px] w-44 mt-6"
        >
          {showrules ? "Show" : "Hide"} Rules
        </button>
      </div>
      <div className="absolute top-[330px] lg:top-96 left-5 pb-8">
        {!showrules && <Rules />}
        {/* {!showrules ?<Rules />: ""} */}
      </div>
    </div>
  );
};

export default RollDice;
