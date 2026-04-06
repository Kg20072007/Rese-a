import React from "react";
import "./styles.css";

const SeccionDos = () => {
  return (
    <div className="resena">
      <h2>ASPECTOS CLAVES</h2>
      <p>React se basa en una arquitectura de componentes, donde las aplicaciones se dividen en pequeñas piezas autocontenidas que pueden interactuar entre sí, lo que facilita la mantenibilidad y reutilización del código. Sigue un paradigma declarativo que permite crear interfaces interactivas y actualiza automáticamente solo los componentes necesarios cuando los datos cambian, simplificando el desarrollo. Utiliza JSX (JavaScript XML), una extensión de sintaxis que permite escribir estructuras similares a HTML dentro del código JavaScript. Además, implementa el Virtual DOM, una representación en memoria del DOM real que compara ambos para aplicar solo los cambios mínimos y mejorar el rendimiento. Para el inicio de un proyecto, se emplea la terminal con el comando npx create-react-app nombre-app, lo que configura el entorno de desarrollo siempre que se tenga Node.js instalado.</p>
    </div>
  );
};

export default SeccionDos;