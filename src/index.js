import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/fonts.css";
import "./css/colors.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
