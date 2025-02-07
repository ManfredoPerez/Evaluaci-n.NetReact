namespace backend.Models
{
    public class AlumnoDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string NombrePadre { get; set; }
        public string NombreMadre { get; set; }
        public string Grado { get; set; }
        public string Seccion { get; set; }
        public DateTime FechaIngreso { get; set; }
    }
}
