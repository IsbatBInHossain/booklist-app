import React from "react";
// import {useContext} from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "./context/booksContext";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
