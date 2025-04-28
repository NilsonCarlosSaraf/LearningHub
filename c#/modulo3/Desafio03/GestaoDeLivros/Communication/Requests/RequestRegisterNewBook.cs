using System.ComponentModel.DataAnnotations;

namespace GestaoDeLivros.Communication.Requests;

public class RequestRegisterNewBook
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    [Required]
    [EnumDataType(typeof(Genre))]
    public Genre Genre { get; set; }
    public decimal Price { get; set; }

}
