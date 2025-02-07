namespace backend.Models
{
    public class CrearAlumnoDTO
    {
        public string Nombre { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string NombrePadre { get; set; }
        public string NombreMadre { get; set; }
        public int Grado { get; set; }
        public int Seccion { get; set; }
        public DateTime FechaIngreso { get; set; }
    }
}
