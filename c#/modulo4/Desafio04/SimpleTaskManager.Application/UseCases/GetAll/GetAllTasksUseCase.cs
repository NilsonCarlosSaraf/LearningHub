using SimpleTaskManager.Communication.Responses;

namespace SimpleTaskManager.Application.UseCases.GetAll;

public class GetAllTasksUseCase
{
    public ResponseAllTasksJson Execute()
    {
        return new ResponseAllTasksJson
        {
            Tasks = new List<ResponseShortTaskJson>
            {
                new ResponseShortTaskJson
                {
                    Id = 1,
                    Name = "Task 1",
                    Priority = Communication.Enums.Priority.High,
                    Status = Communication.Enums.Status.Waiting
                },
                new ResponseShortTaskJson
                {
                    Id = 2,
                    Name = "Task 2",
                    Priority = Communication.Enums.Priority.Medium,
                    Status = Communication.Enums.Status.Ongoing
                }
            }
        }; 

    }


}
