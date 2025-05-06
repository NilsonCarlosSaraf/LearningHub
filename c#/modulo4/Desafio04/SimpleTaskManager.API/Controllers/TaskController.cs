using Microsoft.AspNetCore.Mvc;

namespace SimpleTaskManager.API.Controllers;
public class TaskController : TaskBaseController
{
    [HttpGet]

    public IActionResult GeAllTasks()
    {
   
        return Ok();
    }

    [HttpPost]
    public IActionResult CreateTask()
    {
        return Ok();
    }

}
