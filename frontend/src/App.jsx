// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListarAlumnos from "./pages/ListarAlumnos/ListarAlumnos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CrearAlumno from "./pages/CrearAlumno/CrearAlumno";
import ConsultarAlumnosGrado from "./pages/ConsultarAlumnosGrado/ConsultarAlumnosGrado";


function App() {
  return (
    <Router>
      <div className="container-fluid py-4 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="text-center mb-4 text-primary">Sistema de Gestión de Alumnos</h1>
            <h5 className="text-center mb-4 text-primary">Evaluación de .Net y React</h5>
            <Navbar />
            <div className="bg-white p-4 rounded shadow">
              <Routes>
                <Route path="/listar-alumnos" element={<ListarAlumnos />} />
                <Route path="/crear-alumno" element={<CrearAlumno />} />
                <Route path="/consultar-alumnos-grado" element={<ConsultarAlumnosGrado />} />
                <Route path="/" element={<ListarAlumnos />} /> {/* Ruta por defecto */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;