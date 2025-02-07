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
    public class GradoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GradoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("crear")]
        public async Task<IActionResult> CrearGrado([FromBody] Grado grado)
        {
            _context.Grados.Add(grado);
            await _context.SaveChangesAsync();
            return Ok(grado);
        }

        [HttpGet("listar")]
        public async Task<IActionResult> ListarGrados()
        {
            var grados = await _context.Grados.ToListAsync();
            return Ok(grados);
        }
    }
}
