using SimpleTaskManager.Communication.Responses;

namespace SimpleTaskManager.Application.UseCases.GetAll;

public class GetAllTasksUseCase
{
    public ResponseAllTasksJson Execute()
    {
        return new ResponseAllTasksJson
        {
            Tasks = new List<ResponseAllTasksJson>
            {
                new ResponseAllTasksJson
                {
                    Id = 1,
                    Name = "Task 1",
                    Priority = Communication.Enums.Priority.Medium,
                    Status = Communication.Enums.Status.Ongoing
                }
            }
        }; 

    }


}
