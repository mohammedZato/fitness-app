import { createContext, useState } from "react";

export const FitnessData = createContext();

function GlobalState({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [trainersDropdown, setTrainersDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);

  console.log(serviceDropdown);
  return (
    <FitnessData.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        serviceDropdown,
        setServiceDropdown,
        trainersDropdown,
        setTrainersDropdown,
        contactDropdown,
        setContactDropdown,
      }}
    >
      {children}
    </FitnessData.Provider>
  );
}
export default GlobalState;
