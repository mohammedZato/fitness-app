import { useContext } from "react";
import { FitnessData } from "../context";

export default function Service() {
  const { setServiceDropdown } = useContext(FitnessData);

  return (
    <>
      <div
        onMouseOver={() => setServiceDropdown(true)}
        onMouseLeave={() => setServiceDropdown(false)}
        className="w-60 border-none rounded-md bg-gray-400 px-4 py-4 text-black absolute top-[75px] left-[570px]"
      >
        <h2 className="text-xl mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
          WeightLifting
        </h2>
        <h2 className="text-xl mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
          Cardio Sessions
        </h2>
        <h2 className="text-xl mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
          Pilates
        </h2>
        <h2 className="text-xl mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
          Swing Classes
        </h2>
        <h2 className="text-xl mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
          Sauna
        </h2>
      </div>
    </>
  );
}
