import { useState, useEffect } from "react";
import api from "../../Service/api.js";
import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";

const CrearAlumno = () => {
  const [alumno, setAlumno] = useState({
    nombre: "",
    fechaNacimiento: "",
    nombrePadre: "",
    nombreMadre: "",
    grado: "",
    seccion: "",
    fechaIngreso: "",
  });

  const [grados, setGrados] = useState([]);
  const [secciones, setSecciones] = useState([]);
  const [grado, setGrado] = useState({ nombre: "" });
  const [seccion, setSeccion] = useState({ nombre: "" });

  // Cargar grados y secciones al montar el componente
  useEffect(() => {
    cargarGrados();
    cargarSecciones();
  }, []);

  const cargarGrados = async () => {
    try {
      const response = await api.get("/Grado/listar");
      setGrados(response.data);
    } catch (error) {
      console.error("Error cargando grados:", error);
    }
  };

  const cargarSecciones = async () => {
    try {
      const response = await api.get("/Seccion/listar");
      setSecciones(response.data);
    } catch (error) {
      console.error("Error cargando secciones:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno({ ...alumno, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/Alumno/crear", alumno);
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "Alumno creado exitosamente",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        limpiarFormulario();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al crear el alumno",
        confirmButtonColor: "#d33",
      });
    }
  };

  const agregarGrado = async () => {
    try {
      const response = await api.post("/Grado/crear", grado);
      cargarGrados();
      Swal.fire("Éxito", "Grado agregado correctamente", "success");
      setGrado({ nombre: "" });
    } catch (error) {
      Swal.fire("Error", "No se pudo agregar el grado", "error");
    }
  };

  const agregarSeccion = async () => {
    try {
      const response = await api.post("/Seccion/crear", seccion);
      cargarSecciones();
      Swal.fire("Éxito", "Sección agregada correctamente", "success");
      setSeccion({ nombre: "" });
    } catch (error) {
      Swal.fire("Error", "No se pudo agregar la sección", "error");
    }
  };

  const limpiarFormulario = () => {
    setAlumno({
      nombre: "",
      fechaNacimiento: "",
      nombrePadre: "",
      nombreMadre: "",
      grado: "",
      seccion: "",
      fechaIngreso: "",
    });
  };

  return (
    <div className="container-fluid py-1 bg-white">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-success text-white py-2 d-flex justify-content-between">
              <h2 className="mb-0 text-center">Crear Alumno</h2>
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAgregarGrado"
                >
                  Agregar Grado
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAgregarSeccion"
                >
                  Agregar Sección
                </button>
              </div>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label fs-5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="nombre"
                      name="nombre"
                      value={alumno.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="fechaNacimiento" className="form-label fs-5">
                      Fecha de Nacimiento
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      id="fechaNacimiento"
                      name="fechaNacimiento"
                      value={alumno.fechaNacimiento}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nombrePadre" className="form-label fs-5">
                      Nombre del Padre
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="nombrePadre"
                      name="nombrePadre"
                      value={alumno.nombrePadre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nombreMadre" className="form-label fs-5">
                      Nombre de la Madre
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="nombreMadre"
                      name="nombreMadre"
                      value={alumno.nombreMadre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="grado" className="form-label fs-5">
                      Grado
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="grado"
                      name="grado"
                      value={alumno.grado}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Seleccione un grado
                      </option>
                      {grados.map((grado) => (
                        <option key={grado.id} value={grado.id}>
                          {grado.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="seccion" className="form-label fs-5">
                      Sección
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="seccion"
                      name="seccion"
                      value={alumno.seccion}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Seleccione una sección
                      </option>
                      {secciones.map((seccion) => (
                        <option key={seccion.id} value={seccion.id}>
                          {seccion.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="fechaIngreso" className="form-label fs-5">
                      Fecha de Ingreso
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      id="fechaIngreso"
                      name="fechaIngreso"
                      value={alumno.fechaIngreso}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="d-grid justify-content-center gap-2 mt-5">
                  <button type="submit" className="btn btn-primary btn-lg py-3 fs-4">
                    Crear Alumno
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Agregar Grado */}
      <div
        className="modal fade"
        id="modalAgregarGrado"
        tabIndex="-1"
        aria-labelledby="modalGradoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalGradoLabel">
                Agregar Grado
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={grado.nombre}
                onChange={(e) => setGrado({ nombre: e.target.value })}
                placeholder="Nombre del Grado"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={agregarGrado}
                data-bs-dismiss="modal"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Agregar Sección */}
      <div
        className="modal fade"
        id="modalAgregarSeccion"
        tabIndex="-1"
        aria-labelledby="modalSeccionLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSeccionLabel">
                Agregar Sección
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={seccion.nombre}
                onChange={(e) => setSeccion({ nombre: e.target.value })}
                placeholder="Nombre de la Sección"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={agregarSeccion}
                data-bs-dismiss="modal"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearAlumno;