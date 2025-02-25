// Importaciones de librerías
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importación para el enrutamiento

// Importaciones de componentes
import Navbar from "./components/NavBar/NavBar"; // Barra de navegación
import Footer from "./components/Footer/Footer"; // Pie de página

// Importaciones de páginas
import Models from "./pages/Home"; // Página principal de modelos
import Files from "./pages/ModelDetails"; // Página de detalles del modelo

// Estilos de terceros
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Contexto
import { CarsProvider } from "./context/CarsContext"; // Proveedor de contexto para los autos

const App = () => {
  return (
    // Envuelvo la app con el CarsProvider para compartir el estado globalmente
    <CarsProvider>
      <Navbar /> {/* Barra de navegación */}
      
      {/* Contenedor para las páginas */}
      <div className="container mt-4">
        <Routes>
          {/* Rutas para la navegación */}
          <Route path="/" element={<Models />} /> {/* Página de Modelos */}
          <Route path="/ficha-de-modelo/:id" element={<Files />} /> {/* Página de Detalles de un Modelo */}
        </Routes>
      </div>

      <Footer /> {/* Pie de página */}
    </CarsProvider>
  );
};

export default App;
