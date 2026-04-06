import React from "react";
import Navbar from "./components/Navbar";
import SeccionPrincipal from "./components/SeccionPrincipal";
import SeccionDos from "./components/SeccionDos";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="sidebar">
        <Aside />

        <div className="mainContent">
          <SeccionPrincipal />
          <SeccionDos />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;