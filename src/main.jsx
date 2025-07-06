import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context";

createRoot(document.getElementById("root")).render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>
);
