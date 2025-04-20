namespace Desafio01.Classes;

internal class ContadorDeCaracteres
{
    string? frase = string.Empty;

    public void ReceberCaracteres() {

        Console.WriteLine("Digite uma frase:");
        frase = Console.ReadLine();

        Console.WriteLine($"A frase digitada foi: {frase}");
    }

    public void ContarCaracteres()
    {
        if (string.IsNullOrEmpty(frase))
        {
            Console.WriteLine("Nenhum caractere foi digitado.");
            return;
        }
        int contador = 0;
        foreach (char c in frase)
        {
            if (c != ' ')
            {
                contador++;
            }
        }
        Console.WriteLine($"A quantidade de caracteres na frase é: {contador}");
    }

}
