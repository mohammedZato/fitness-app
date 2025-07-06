import React, { useContext } from "react";
import Logo from "./logo";
import Navbar from "./navigation";
import Service from "./serviceDropdown";
import { FitnessData } from "../context";
import Trainers from "./trainersDrowdown";

export default function Header() {
  const { serviceDropdown, trainersDropdown } = useContext(FitnessData);

  return (
    <>
      <div className="flex items-center justify-evenly gap-40 px-8">
        <Logo />
        <Navbar />
        {serviceDropdown && <Service />}
        {trainersDropdown && <Trainers />}
      </div>
    </>
  );
}
