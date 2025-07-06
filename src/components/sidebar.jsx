import { X } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FitnessData } from "../context";

export default function Sidebar() {
  const { openSidebar, setOpenSidebar } = useContext(FitnessData);

  return (
    <>
      <div
        className={`bg-slate-600 fixed top-0 h-screen w-screen px-12 py-16 transform transition-transform duration-700 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {openSidebar && (
          <ul>
            <X
              onClick={() => setOpenSidebar((prevState) => !prevState)}
              className="size-10 float-right text-black cursor-pointer"
            />
            <li className="pb-8">
              <NavLink>
                <h3 className="text-gray-100 text-2xl hover:scale-105 transition-transform duration-500">
                  Home
                </h3>
              </NavLink>
            </li>
            <li className="pb-8">
              <NavLink>
                <h3 className="text-gray-100 text-2xl hover:scale-105 transition-transform duration-500">
                  About
                </h3>
              </NavLink>
            </li>
            <li className="pb-8">
              <NavLink>
                <h3 className="text-gray-100 text-2xl hover:scale-105 transition-transform duration-500">
                  Services
                </h3>
              </NavLink>
            </li>
            <li className="pb-8">
              <NavLink>
                <h3 className="text-gray-100 text-2xl hover:scale-105 transition-transform duration-500">
                  Trainers
                </h3>
              </NavLink>
            </li>
            <li className="pb-8">
              <NavLink>
                <h3 className="text-gray-100 text-2xl hover:scale-105 transition-transform duration-500">
                  Pricing
                </h3>
              </NavLink>
            </li>
            <li className="pb-8">
              <NavLink>
                <h3 className="text-gray-100 text-2xl hover:scale-105 transition-transform duration-500">
                  Contact
                </h3>
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
        )}
      </div>
    </>
  );
}
