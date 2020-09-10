import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import getRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {getRoutes(false)}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
