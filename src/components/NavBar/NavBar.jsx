import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assets/NavBar/Logo.svg";
import ToggleButton from "../../assets/NavBar/toggle-button.svg";
import CloseButton from "../../assets/NavBar/close-button.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar position-sticky top-0">
      <div className="container-fluid px-3 d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>

        {/* Botones de navegación principales */}
        <div className="navbar-buttons d-flex">
          <NavLink className="btn" to="/">Modelos</NavLink>
          <NavLink className="btn" to="/ficha-de-modelo">Ficha de modelo</NavLink>
        </div>

        {/* Texto de menú */}
        <span className="menu-text">Menú</span>

        {/* Botón de menú hamburguesa */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <img src={ToggleButton} alt="Toggle Menu" className={isOpen ? "change" : ""} />
        </button>

      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        
        {/* Botón para cerrar el menú */}
        <button className="btn btn-close-menu" onClick={() => setIsOpen(false)}>
          <span className="close-nav">Cerrar</span>
          <img className="cross" src={CloseButton} alt="Cerrar" />
        </button>

        {/* Lista de navegación */}
        <ul className="navbar-nav" style={{ paddingTop: "60px" }}>
          <li className="nav-item"><Link className="nav-link" to="/perfil">Modelos</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/configuracion">Servicios y Accesorios</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/financiacion">Financiación</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews y comunidad</Link></li>

          <li className="nav-item mt-3 mb-3"><hr className="my-2 mx-auto line" /></li>

          <li className="nav-item"><Link className="nav-link" to="/mobility">Toyota Mobility Service</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/gazoo-racing">Toyota Gazoo Racing</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/hibridos">Toyota Híbridos</Link></li>

          <li className="nav-item mt-3 mb-3"><hr className="my-2 mx-auto line" /></li>

          <li className="nav-item"><Link className="nav-link" to="/concesionarios">Concesionarios</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/test-drive">Test Drive</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>

          <li className="nav-item mx-auto mb-3"><hr className="my-2 line" /></li>

          {/* Sección de actividades y servicios */}
          <li className="nav-item bg-light-gray"><Link className="nav-link mt-3" to="/actividades">Actividades</Link></li>
          <li className="nav-item bg-light-gray"><Link className="nav-link" to="/servicio-cliente">Servicio al Cliente</Link></li>
          <li className="nav-item bg-light-gray"><Link className="nav-link" to="/ventas-especiales">Ventas Especiales</Link></li>
          <li className="nav-item bg-light-gray"><Link className="nav-link" to="/innovacion">Innovación</Link></li>
          <li className="nav-item bg-light-gray"><Link className="nav-link" to="/prensa">Prensa</Link></li>
          <li className="nav-item bg-light-gray"><Link className="nav-link mb-3" to="/acerca-de">Acerca de...</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
