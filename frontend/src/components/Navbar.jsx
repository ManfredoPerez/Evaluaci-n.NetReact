// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm mb-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Listado Alumnos */}
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-semibold text-white px-4 py-3" to="/listar-alumnos">
                <i className="bi bi-list-ul me-2"></i> 👦 Listado Alumnos
              </Link>
            </li>
            {/* Crear Alumno */}
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-semibold text-white px-4 py-3" to="/crear-alumno">
                <i className="bi bi-list-ul me-2"></i> Crear Alumno
              </Link>
            </li>
            {/* Consultar Alumnos por Grado */}
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-semibold text-white px-4 py-3" to="/consultar-alumnos-grado">
                <i className="bi bi-list-ul me-2"></i> Alumno por Grado
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;