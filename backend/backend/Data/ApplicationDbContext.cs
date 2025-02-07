using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Alumno> Alumnos { get; set; }

        public DbSet<Grado> Grados { get; set; }

        public DbSet<Seccion> Secciones { get; set; }
    }
}
