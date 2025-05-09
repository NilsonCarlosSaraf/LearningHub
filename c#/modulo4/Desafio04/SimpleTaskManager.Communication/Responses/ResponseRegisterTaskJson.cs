using SimpleTaskManager.Communication.Requests;

namespace SimpleTaskManager.Communication.Responses;

public class ResponseRegisterTaskJson
{
    public ResponseRegisteredTaskJson Execute(RequestTaskJson request)
    { 
    return new ResponseRegisteredTaskJson
    {
        Id = 1,
        Name = request.Name
    };
    }
}
