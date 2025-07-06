import { useContext } from "react";
import Logo from "./logo";
import Navbar from "./navigation";
import Service from "./serviceDropdown";
import { FitnessData } from "../context";
import Trainers from "./trainersDrowdown";
import Contacts from "./contactsDropdown";

export default function Header() {
  const { serviceDropdown, trainersDropdown, contactDropdown } =
    useContext(FitnessData);

  return (
    <>
      <div className="flex items-center justify-evenly gap-40 px-8">
        <Logo />
        <Navbar />
        {serviceDropdown && <Service />}
        {trainersDropdown && <Trainers />}
        {contactDropdown && <Contacts />}
      </div>
    </>
  );
}
