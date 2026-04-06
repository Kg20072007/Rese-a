// Importamos React para crear el componente
import React from "react";

// Importamos los estilos del componente
import "./styles.css";

// Creamos el componente Aside (barra lateral)
const Aside = () => {
  return (
    // Etiqueta aside que representa información adicional
    <aside className="sidebar">

      {/* Párrafo con información complementaria sobre React */}
      <p>
        React destaca por su popularidad, ya que es ampliamente utilizado y
        cuenta con una gran comunidad y excelente documentación que facilita el
        aprendizaje y la resolución de problemas. Su ecosistema es muy completo,
        permitiendo complementarlo con frameworks como Next.js o Remix para añadir
        funcionalidades de backend y ampliar sus capacidades. Además, ofrece gran
        flexibilidad, pues aunque su enfoque principal es la interfaz de usuario
        (frontend), permite desarrollar aplicaciones complejas y escalables.
      </p>

    </aside>
  );
};

// Exportamos el componente para usarlo en App.jsx
export default Aside;