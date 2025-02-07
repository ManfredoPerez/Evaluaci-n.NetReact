using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Alumno
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }

        [Column("fecha_nacimiento")]
        public DateTime FechaNacimiento { get; set; }

        [Column("nombre_padre")]
        public string NombrePadre { get; set; }

        [Column("nombre_madre")]
        public string NombreMadre { get; set; }

        [ForeignKey("Grado")]
        [Column("grado_id")]
        public int GradoId { get; set; }
        public Grado Grado { get; set; }

        [ForeignKey("Seccion")]
        [Column("seccion_id")]
        public int SeccionId { get; set; }
        public Seccion Seccion { get; set; }

        [Column("fecha_ingreso")]
        public DateTime FechaIngreso { get; set; }
    }
}
