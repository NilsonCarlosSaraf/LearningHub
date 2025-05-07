using Microsoft.AspNetCore.Mvc;

namespace SimpleTaskManager.API.Controllers;
public class TaskController : TaskBaseController
{
    [HttpGet]

    public IActionResult GeAllTasks()
    {
   
        return Ok();
    }

    [HttpGet]
    public IActionResult GetTaskById(int id)
    {
        return Ok();
    }

    [HttpPost]
    public IActionResult CreateTask()
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
