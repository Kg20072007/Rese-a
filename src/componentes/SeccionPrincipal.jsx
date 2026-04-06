// Importamos React para poder crear el componente
import React from "react";

// Importamos los estilos que se usan en este componente
import "./styles.css";

// Creamos el componente SeccionPrincipal
const SeccionPrincipal = () => {
  return (
    // Contenedor de la reseña
    <div className="resena">
      {/* Título de la reseña */}
      <h2>RESEÑA</h2>

      {/* Párrafo donde explicamos qué es React */}
      <p>
        Es una biblioteca JavaScript de código abierto, desarrollada por Meta,
        que se especializa en la creación de interfaces de usuario (UI)
        interactivas y eficientes para aplicaciones web y móviles. Destaca por
        su arquitectura basada en componentes reutilizables y el uso de un "DOM
        virtual", lo que mejora la velocidad de renderizado al actualizar solo
        los elementos necesarios.
      </p>
    </div>
  );
};

// Exportamos el componente para poder usarlo en App.jsx
export default SeccionPrincipal;