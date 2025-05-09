using SimpleTaskManager.Communication.Requests;
using SimpleTaskManager.Communication.Responses;

namespace SimpleTaskManager.Application.UseCases.Register;

public class RegisterTaskUseCase
{
    public ResponseRegisteredTaskJson Execute(RequestTaskJson request)
    {
        return new ResponseRegisteredTaskJson
        {
            Id = 1,
            Name = request.Name,
        };
    }

}
