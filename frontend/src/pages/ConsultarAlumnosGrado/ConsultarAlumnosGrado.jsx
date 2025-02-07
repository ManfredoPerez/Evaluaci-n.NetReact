import { useState, useEffect } from "react";
import api from "../../Service/api";

const ConsultarAlumnosGrado = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [grados, setGrados] = useState([]);
  const [idGrado, setIdGrado] = useState("");

  // Cargar grados al montar el componente
  useEffect(() => {
    cargarGrados();
  }, []);

  const cargarGrados = async () => {
    try {
      const response = await api.get("/Grado/listar");
      setGrados(response.data);
    } catch (error) {
      console.error("Error cargando grados:", error);
    }
  };

  const consultarAlumnos = async (gradoId) => {
    if (gradoId) {
      // Convertir gradoId a número
      const id = parseInt(gradoId, 10);
      console.log("Consultando alumnos para el grado:", id);

      // Limpiar el estado de alumnos antes de hacer la consulta
      setAlumnos([]);

      try {
        const response = await api.get(`/Alumno/consultar/${id}`);
        console.log("Respuesta de la API:", response.data);
        setAlumnos(response.data);
      } catch (error) {
        console.error("Error consultando alumnos:", error);
      }
    } else {
      // Si no hay gradoId, limpiar la lista de alumnos
      setAlumnos([]);
    }
  };

  const handleChangeGrado = (e) => {
    const selectedGradoId = e.target.value;
    setIdGrado(selectedGradoId); // Actualizar el estado idGrado
    consultarAlumnos(selectedGradoId); // Llamar a la función consultarAlumnos con el nuevo valor
  };

  return (
    <div className="container-fluid py-1 bg-white">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-11">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-success text-white py-2">
              <h2 className="mb-0 text-center">Consultar Alumnos por Grado</h2>
            </div>
            <div className="card-body p-5">
              <div className="row mb-5">
                <div className="col-md-8 col-lg-6 mx-auto">
                  <label htmlFor="grado" className="form-label fs-4 mb-3">
                    Seleccione un Grado
                  </label>
                  <select
                    className="form-select form-select-lg fs-5"
                    id="grado"
                    value={idGrado}
                    onChange={handleChangeGrado} // Usar handleChangeGrado para manejar el cambio
                  >
                    <option value="" disabled>
                      Escoge un grado
                    </option>
                    {grados.map((grado) => (
                      <option key={grado.id} value={grado.id}>
                        {grado.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {alumnos.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover table-striped align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Nombre</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Nombre del Padre</th>
                        <th>Nombre de la Madre</th>
                        <th>Sección</th>
                        <th>Fecha de Ingreso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                          <td className="py-3">{alumno.nombre}</td>
                          <td className="py-3">
                            {new Date(alumno.fechaNacimiento).toLocaleDateString()}
                          </td>
                          <td className="py-3">{alumno.nombrePadre}</td>
                          <td className="py-3">{alumno.nombreMadre}</td>
                          <td className="py-3">{alumno.seccion}</td>
                          <td className="py-3">
                            {new Date(alumno.fechaIngreso).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : idGrado ? (
                <div className="alert alert-info mt-4 fs-5" role="alert">
                  No se encontraron alumnos para el grado seleccionado.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultarAlumnosGrado;