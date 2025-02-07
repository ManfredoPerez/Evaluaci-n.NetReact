using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("seccion")]
    public class Seccion
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
    }
}
