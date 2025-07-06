import { useContext } from "react";
import Layer2 from "../images/Layer2.png";
import Layer3 from "../images/Layer3.png";
import Layer8 from "../images/Layer8.png";
import { FitnessData } from "../context";

export default function Trainers() {
  const { setTrainersDropdown } = useContext(FitnessData);

  return (
    <>
      <div
        onMouseEnter={() => setTrainersDropdown(true)}
        onMouseLeave={() => setTrainersDropdown(false)}
        className="border rounded border-none px-4 py-4 text-black bg-gray-400 absolute top-[75px] right-[400px] cursor-pointer"
      >
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-500">
            <img src={Layer2} alt="" />
            <h4 className="text-xl">Candace Parker</h4>
          </li>
          <li className="flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-500">
            <img src={Layer3} alt="" />
            <h4 className="text-xl">James Gunn</h4>
          </li>
          <li className="flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-500">
            <img src={Layer8} alt="" />
            <h4 className="text-xl">Michelle Rodriguez</h4>
          </li>
        </ul>
      </div>
    </>
  );
}
