namespace Desafio01.Classes;

internal class InsertName
{
    public static void ReceiveName()
    {
        Console.WriteLine("Digite seu nome:");
        string? nome = Console.ReadLine();
        Console.WriteLine("Digite seu sobrenome:");
        string? sobreNome = Console.ReadLine();
        string? nomeCompleto = nome?.Trim() + " " + sobreNome?.Trim();
        string mensagem = $"Olá, {nomeCompleto}! Seja muito bem vindo";
        Console.WriteLine(mensagem);
    }
}
