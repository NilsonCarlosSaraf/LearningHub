using GestaoDeLivros.Communication.Requests;
using GestaoDeLivros.Communication.Responses;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;
namespace GestaoDeLivros.Controllers;
public class BooksController : LibraryBaseController
{
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok("You retrieved all registered books!");
    }

    [HttpGet]
    [Route("{id}")]
    public IActionResult GetById([FromRoute] int id)
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
            Genre = request.Genre,
            Price = request.Price

        };

        return Created(string.Empty, response);    
    }

    [HttpDelete]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [Route("{id}")]
    public IActionResult Delete() {
        return NoContent();
    }
}
