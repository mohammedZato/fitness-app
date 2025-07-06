import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Arrowdown from "../images/ArrowDown.svg";
import { FitnessData } from "../context";

export default function Navbar() {
  const {
    setOpenSidebar,
    setServiceDropdown,
    setTrainersDropdown,
    setContactDropdown,
  } = useContext(FitnessData);

  return (
    <>
      <ul className="items-center gap-11 hidden lg:flex">
        <li>
          <NavLink className="hover:underline decoration-slate-300">
            <h3 className="text-gray-100 font-sm">Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <h3 className="text-gray-100 font-sm">About</h3>
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setServiceDropdown(true)}
          onMouseLeave={() => setServiceDropdown(false)}
        >
          <NavLink className="flex items-center gap-2">
            <h3 className="text-gray-100 font-sm">Services</h3>
            <img src={Arrowdown} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            onMouseEnter={() => setTrainersDropdown(true)}
            onMouseLeave={() => setTrainersDropdown(false)}
            className="flex items-center gap-2"
          >
            <h3 className="text-gray-100 font-sm">Trainers</h3>
            <img src={Arrowdown} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink>
            <h3 className="text-gray-100 font-sm">Pricing</h3>
          </NavLink>
        </li>
        <li
          onMouseOver={() => setContactDropdown(true)}
          onMouseLeave={() => setContactDropdown(false)}
        >
          <NavLink className="flex items-center gap-2">
            <h3 className="text-gray-100 font-sm">Contact</h3>
            <img src={Arrowdown} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink>
            <button className="text-gray-100 bg-gray-800 hover:border-gray-800 hover:scale-110 transition-transform duration-700">
              Buy Now
            </button>
          </NavLink>
        </li>
      </ul>
      <span
        onClick={() => setOpenSidebar((prevState) => !prevState)}
        className="text-4xl text-black cursor-pointer lg:hidden"
      >
        <ion-icon cla name="menu-outline"></ion-icon>
      </span>
    </>
  );
}
