using Microsoft.AspNetCore.Mvc;
using SimpleTaskManager.Application.UseCases.Delete;
using SimpleTaskManager.Application.UseCases.GetById;
using SimpleTaskManager.Application.UseCases.Register;
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
    [ProducesResponseType(typeof(ResponseTaskJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseTaskJson), StatusCodes.Status404NotFound)]
    [Route("{id}")]
    public IActionResult GetTaskById(int id)
    {
        var useCase = new GetTaskByIdUseCase();

        var response = useCase.Execute(id);

        return Ok(response);
    }

    [HttpPost]
    [ProducesResponseType(typeof(ResponseRegisteredTaskJson), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ResponseErrorsJson), StatusCodes.Status400BadRequest)]
    public IActionResult CreateTask([FromBody] RequestTaskJson request)
    {
        var useCase = new RegisterTaskUseCase();

        var response = useCase.Execute(request);

        return Created(string.Empty, response);
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
