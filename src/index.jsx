import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import CsrfToken from "common/helpers/csrfToken";
ReactDOM.render(
  <React.StrictMode>
    {/* <CsrfToken /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
