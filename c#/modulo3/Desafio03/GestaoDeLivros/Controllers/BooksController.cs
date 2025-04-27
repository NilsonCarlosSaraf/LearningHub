using GestaoDeLivros.Communication.Requests;
using GestaoDeLivros.Communication.Responses;
using Microsoft.AspNetCore.Mvc;
namespace GestaoDeLivros.Controllers;
public class BooksController : LibraryBaseController
{
    [HttpGet]
    [Route("/allbooks")]
    public IActionResult GetAll()
    {
        return Ok("You retrieved all registered books!");
    }

    [HttpGet]
    [Route("/book:{id}")]
    public IActionResult Get([FromRoute] int id)
    {
        return Ok($"retrieved book with id {id}");
    }

    [HttpPost]
    //[Route("book:{id}/{title}")]
    public IActionResult Post([FromBody] RequestRegisterNewBook request)
    {
        var response = new ResponseRegisterNewBook
        {
            Title = request.Title,
            Author = request.Author,
            Genre = request.Genre
        };

        return Created(string.Empty, response);    
    }
}
