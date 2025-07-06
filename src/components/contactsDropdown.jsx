import { useContext } from "react";
import { Mail, PhoneCallIcon } from "lucide-react";
import { FitnessData } from "../context";

export default function Contacts() {
  const { setContactDropdown } = useContext(FitnessData);

  return (
    <>
      <div
        onMouseEnter={() => setContactDropdown(true)}
        onMouseLeave={() => setContactDropdown(false)}
        className="w-96 border-none rounded-md bg-gray-400 px-5 py-4 text-black absolute top-[75px] right-[150px]"
      >
        <div className="flex items-center gap-3 text-lg mb-3 hover:scale-105 transition-transform duration-500 cursor-pointer">
          <div>
            <PhoneCallIcon className="size-7" />
          </div>
          <h2>+233 553654326 / +233 204132137</h2>
        </div>
        <div className="flex items-center gap-3 text-lg mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
          <div>
            <Mail className="size-7" />
          </div>
          <h2>alphafitness@gmail.com</h2>
        </div>
      </div>
    </>
  );
}
