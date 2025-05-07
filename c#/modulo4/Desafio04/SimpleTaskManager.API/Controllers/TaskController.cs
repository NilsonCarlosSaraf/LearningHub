using Microsoft.AspNetCore.Mvc;
using SimpleTaskManager.Communication.Enums;

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
    public IActionResult CreateTask([FromBody]int id, string name, string description, Priority priority, Status status)
    {
        return Ok();
    }

    [HttpPut]
    public IActionResult UpdateTask(int id)
    {
        return Ok();
    }

    [HttpDelete]
    [Route("{id}")]
    public IActionResult DeleteTask([FromRoute]int id)
    {
        return Ok();
    }

}
