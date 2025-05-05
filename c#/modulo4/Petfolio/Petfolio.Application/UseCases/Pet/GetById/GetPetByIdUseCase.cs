using Petfolio.Communication.Responses;

namespace Petfolio.Application.UseCases.Pet.GetById;

public class GetPetByIdUseCase
{
    public ResponsePetJson Execute(int id)
    {
        return new ResponsePetJson 
        { 
            Id = id, 
            Name = "Pipoca", 
            Type = Communication.Enums.PetType.Cat, 
            Birthday = new DateTime(year: 2003, month: 01, day: 01)
        };
    }
}
