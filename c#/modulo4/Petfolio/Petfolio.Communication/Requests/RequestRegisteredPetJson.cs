using Petfolio.Communication.Enums;
namespace Petfolio.Communication.Requests;

public class RequestRegisteredPetJson
{
    public string Name { get; set; } = string.Empty;
    public DateTime BirthDay { get; set; }
    public PetType Type { get; set; }
}
