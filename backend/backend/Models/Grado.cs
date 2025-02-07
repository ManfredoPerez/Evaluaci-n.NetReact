using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("grado")]
    public class Grado
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
    }
}
