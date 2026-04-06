// Importamos React para poder crear el componente
import React from "react";

// Importamos los estilos del footer
import "./styles.css";

// Creamos el componente Footer (pie de página)
const Footer = () => {

  return (
    // Etiqueta footer que representa la parte final de la página
    <footer className="footer">

      {/* Texto informativo del proyecto */}
      <p>© 2026 - Proyecto React_Reseña</p>

    </footer>
  );
};

// Exportamos el componente para usarlo en App.jsx
export default Footer;