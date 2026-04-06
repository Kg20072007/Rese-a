// Importamos React para poder usar componentes
import React from "react";

// Importamos cada componente que creamos
import Navbar from "./components/Navbar";
import SeccionPrincipal from "./components/SeccionPrincipal";
import SeccionDos from "./components/SeccionDos";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

// Importamos los estilos generales
import "./App.css";

// Este es el componente principal donde unimos todo
function App() {
  return (
    <>
      {/* Mostramos la barra de navegación arriba */}
      <Navbar />

      {/* Contenedor donde organizamos el aside y el contenido */}
      <div className="sidebar">
        {/* Mostramos la barra lateral */}
        <Aside />

        {/* Contenedor del contenido principal con las reseñas */}
        <div className="mainContent">
          <SeccionPrincipal />
          <SeccionDos />
        </div>
      </div>

      {/* Mostramos el pie de página */}
      <Footer />
    </>
  );
}

// Exportamos App para que pueda renderizarse en main.jsx
export default App;