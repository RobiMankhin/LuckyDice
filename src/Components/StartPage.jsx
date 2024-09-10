const StartPage = ({ toggle }) => {
  return (
    <div className="w-full ">
      <div className=" h-80 mx-0 lg:h-96 mt-20 max-w-[1240px] flex md:flex-row flex-col justify-center gap-6 items-center ">
        <img
          className="w-[400px] lg:w-[500px]"
          src="/dices.png"
          alt="Dice Game"
        />
        <div className="flex flex-col items-center md:items-end">
          <h1 className="font-bold text-6xl">Dice Game</h1>
          <button
            onClick={toggle}
            className="bg-black hover:bg-white hover:text-black border-2 transition-all duration-300 hover:border-black rounded-lg  text-white font-bold px-10 py-[4px] mt-5"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
