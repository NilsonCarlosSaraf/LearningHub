using System.Globalization;

namespace Desafio01.Classes;

internal class FormatadorDeData
{
    public static void FormatarData()
    {
        DateTime agora = DateTime.Now;
        CultureInfo formatoDeDataBr = new CultureInfo("pt-BR");

        Console.WriteLine("Escolha uma das opções para exibir a data/hora:");
        Console.WriteLine("1 - Formato completo");
        Console.WriteLine("2 - Apenas a data (dd/MM/yyyy)");
        Console.WriteLine("3 - Apenas a hora (HH:mm:ss)");
        Console.WriteLine("4 - Data com mês por extenso");
        Console.Write("Opção: ");
        string opcao = Console.ReadLine();

        Console.WriteLine();

        switch (opcao)
        {
            case "1":
                Console.WriteLine("Formato completo:");
                Console.WriteLine(agora.ToString("dddd, dd 'de' MMMM 'de' yyyy HH:mm:ss", formatoDeDataBr));
                break;

            case "2":
                Console.WriteLine("Apenas a data:");
                Console.WriteLine(agora.ToString("dd/MM/yyyy"));
                break;

            case "3":
                Console.WriteLine("Apenas a hora:");
                Console.WriteLine(agora.ToString("HH:mm:ss"));
                break;

            case "4":
                Console.WriteLine("Data com mês por extenso:");
                Console.WriteLine(agora.ToString("dd 'de' MMMM 'de' yyyy", formatoDeDataBr));
                break;

            default:
                Console.WriteLine("Opção inválida.");
                break;
        }
    }
}
