using Microsoft.AspNetCore.Mvc;
using System.Net.Cache;

namespace MyFirstApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(User), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public IActionResult GetById([FromQuery]int id, [FromQuery] string? nickname)
    {
        var response = new User
        {
            Id = 1,
            Age = 7,
            Name = "Nilson"
        };

        return Ok(response);
    }
}
