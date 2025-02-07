using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AlumnoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AlumnoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("crear")]
        public async Task<IActionResult> CrearAlumno([FromBody] CrearAlumnoDTO alumnoDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Mapear el DTO al modelo Alumno
            var alumno = new Alumno
            {
                Nombre = alumnoDTO.Nombre,
                FechaNacimiento = alumnoDTO.FechaNacimiento,
                NombrePadre = alumnoDTO.NombrePadre,
                NombreMadre = alumnoDTO.NombreMadre,
                GradoId = alumnoDTO.Grado,  // Asignar el ID del grado
                SeccionId = alumnoDTO.Seccion, // Asignar el ID de la sección
                FechaIngreso = alumnoDTO.FechaIngreso
            };

            // Guardar el alumno en la base de datos
            _context.Alumnos.Add(alumno);
            await _context.SaveChangesAsync();

            // Devolver una respuesta exitosa
            return Ok(alumno);
        }

        [HttpGet("listar")]
        public async Task<IActionResult> ListarAlumnos()
        {
            var alumnos = await _context.Alumnos
                .Include(a => a.Grado)    // Cargar la relación Grado
                .Include(a => a.Seccion)  // Cargar la relación Seccion
                .Select(a => new AlumnoDTO // Mapear a AlumnoDTO
                {
                    Id = a.Id,
                    Nombre = a.Nombre,
                    FechaNacimiento = a.FechaNacimiento,
                    NombrePadre = a.NombrePadre,
                    NombreMadre = a.NombreMadre,
                    Grado = a.Grado.Nombre, // Obtener el nombre del grado
                    Seccion = a.Seccion.Nombre, // Obtener el nombre de la sección
                    FechaIngreso = a.FechaIngreso
                })
                .ToListAsync();

            return Ok(alumnos);
        }

        [HttpGet("consultar/{gradoId}")]
        public async Task<IActionResult> ConsultarPorGrado(int gradoId)
        {
            var alumnos = await _context.Alumnos
                .Where(a => a.GradoId == gradoId)
                .Select(a => new AlumnoDTO // Mapear a AlumnoDTO
                {
                    Id = a.Id,
                    Nombre = a.Nombre,
                    FechaNacimiento = a.FechaNacimiento,
                    NombrePadre = a.NombrePadre,
                    NombreMadre = a.NombreMadre,
                    Grado = a.Grado.Nombre, // Obtener el nombre del grado
                    Seccion = a.Seccion.Nombre, // Obtener el nombre de la sección
                    FechaIngreso = a.FechaIngreso
                })
                .ToListAsync();

            return Ok(alumnos);
        }
    }
}
