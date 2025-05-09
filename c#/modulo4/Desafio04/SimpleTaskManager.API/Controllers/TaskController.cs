using Microsoft.AspNetCore.Mvc;
using SimpleTaskManager.Application.UseCases.Delete;
using SimpleTaskManager.Application.UseCases.Update;
using SimpleTaskManager.Communication.Requests;
using SimpleTaskManager.Communication.Responses;

namespace SimpleTaskManager.API.Controllers;
public class TaskController : TaskBaseController
{
    [HttpGet]
    public IActionResult GeAllTasks()
    {
   
        return Ok();
    }

    [HttpGet]
    [Route("{id}")]
    public IActionResult GetTaskById(int id)
    {
        return Ok();
    }

    [HttpPost]
    public IActionResult CreateTask([FromBody] RequestTaskJson request)
    {
        return Created(string.Empty,request);
    }

    [HttpPut]
    [Route("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorsJson), StatusCodes.Status400BadRequest)]
    public IActionResult UpdateTask([FromRoute] int id,[FromBody] RequestTaskJson request)
    {
        var useCase = new UpdateTaskUseCase();

        useCase.Execute(id, request);

        return NoContent();
    }

    [HttpDelete]
    [Route("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseTaskJson), StatusCodes.Status404NotFound)]
    public IActionResult DeleteTask([FromRoute]int id)
    {
        var useCase = new DeleteTaskByIdUseCase();

        useCase.Execute(id);

        return NoContent();
    }

}
