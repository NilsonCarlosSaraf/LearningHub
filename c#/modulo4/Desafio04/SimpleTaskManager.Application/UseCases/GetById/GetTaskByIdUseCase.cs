using SimpleTaskManager.Communication.Responses;

namespace SimpleTaskManager.Application.UseCases.GetById;
public class GetTaskByIdUseCase
{
    public ResponseTaskJson Execute(int id)
    {
        return new ResponseTaskJson
        {
            Id = id,
            Name = "Task name",
            Description = "Task description",
            Priority = Communication.Enums.Priority.Medium,
            Status = Communication.Enums.Status.Finished
        };
    }   

}
