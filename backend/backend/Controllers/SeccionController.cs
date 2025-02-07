using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SeccionController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SeccionController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("crear")]
        public async Task<IActionResult> CrearSeccion([FromBody] Seccion seccion)
        {
            _context.Secciones.Add(seccion);
            await _context.SaveChangesAsync();
            return Ok(seccion);
        }

        [HttpGet("listar")]
        public async Task<IActionResult> ListarSecciones()
        {
            var secciones = await _context.Secciones.ToListAsync();
            return Ok(secciones);
        }
    }
}
