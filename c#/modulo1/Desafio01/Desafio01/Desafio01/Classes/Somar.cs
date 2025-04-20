namespace Desafio01.Classes;

internal class Operacoes
{
    static double valor1;
    static double valor2;

    public static void  ReceberValores()
    {
        Console.WriteLine("Digite o primeiro valor:");
        string? getValor1 = Console.ReadLine();
        valor1 = Convert.ToDouble(getValor1);
        Console.WriteLine($"O primeiro valor inserido foi {getValor1}");

        Console.WriteLine("Digite o segundo valor:");
        string? getValor2 = Console.ReadLine();
        valor2 = Convert.ToDouble(getValor2);
        Console.WriteLine($"O segundo valor inserido foi {getValor2}");

        Console.WriteLine($"Os valores são {getValor1} e {getValor2}");

    }

    public static void SomarValores() {
        double somar = valor1 + valor2;
        Console.WriteLine($"A soma desses valores é {somar}");

    }

    public static void SubtrairValores()
    {
        double subtrair = valor1 - valor2;
        Console.WriteLine($"A subtração desses valores é {subtrair}");
    }

    public static void MultiplicarValores()
    {
        double produto = valor1 * valor2;
        Console.WriteLine($"O produto desses valores é {produto}");
    }

    public static void DividirValores()
    {
        double quociente = valor1 / valor2;
        Console.WriteLine($"O quociente desses valores é {quociente}");
    }

}
