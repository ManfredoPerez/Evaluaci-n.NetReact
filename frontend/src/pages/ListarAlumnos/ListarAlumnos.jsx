import { useEffect, useState } from "react";
import api from "../../Service/api.js";
import "bootstrap/dist/css/bootstrap.min.css";

const ListarAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]); 
  const [alumnosFiltrados, setAlumnosFiltrados] = useState([]); 
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  // Cargar alumnos al montar el componente
  useEffect(() => {
    const cargarAlumnos = async () => {
      try {
        const response = await api.get("/Alumno/listar");
        console.log(response.data)
        setAlumnos(response.data);
        setAlumnosFiltrados(response.data); // Mostrar todos los alumnos
      } catch (error) {
        console.error("Error cargando alumnos:", error);
      }
    };

    cargarAlumnos();
  }, []);

  // Filtrar alumnos/ Buscar
  const buscarAlumnos = () => {
    if (terminoBusqueda) {
      const filtrados = alumnos.filter((alumno) =>
        alumno.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      setAlumnosFiltrados(filtrados);
    } else {
      setAlumnosFiltrados(alumnos); // Si no hay busquedaa, mostrar todos
    }
  };

  return (
    <div className="container-fluid py-1 bg-white">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-11">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-success text-white py-2">
              <h2 className="mb-0 text-center">Listado Alumnos</h2>
            </div>
            <div className="card-body">
              {/* Campo de búsqueda */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Buscar por nombre..."
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                  onInput={buscarAlumnos}
                />
              </div>

              {/* Tabla de alumnos */}
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Nombre del Padre</th>
                    <th>Nombre de la Madre</th>
                    <th>Grado</th>
                    <th>Sección</th>
                    <th>Fecha de Ingreso</th>
                  </tr>
                </thead>
                <tbody>
                  {alumnosFiltrados.map((alumno) => (
                    <tr key={alumno.id}>
                      <td>{alumno.nombre}</td>
                      <td>{new Date(alumno.fechaNacimiento).toLocaleDateString()}</td>
                      <td>{alumno.nombrePadre}</td>
                      <td>{alumno.nombreMadre}</td>
                      <td>{alumno.grado}</td>
                      <td>{alumno.seccion}</td>
                      <td>{new Date(alumno.fechaIngreso).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mensaje si no hay resultados */}
              {alumnosFiltrados.length === 0 && (
                <div className="alert alert-warning">
                  No se encontraron resultados 
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListarAlumnos;