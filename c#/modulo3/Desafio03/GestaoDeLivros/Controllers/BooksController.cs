using Microsoft.AspNetCore.Mvc;
namespace GestaoDeLivros.Controllers;
public class BooksController : LibraryBaseController
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Great");
    }

}
