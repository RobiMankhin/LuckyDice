const Rules = () => {
  return (
    <div className="shadow-md bg-slate-100 ">
      <h1 className="font-bold text-xl">How to play the game?</h1>
      <div className="pt-2 font-semibold text-md">
        <p className="mb-2">Select any number.</p>
        <p className="mb-2">Click on dice image.</p>
        <p className="mb-2">
          After clicking on dice if the selected number is equal to the dice
          number you will get point as dice.
        </p>
        <p>If your guess is wrong then 2 point will be deducted.</p>
      </div>
    </div>
  );
};

export default Rules;
