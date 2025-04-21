using System.Text.RegularExpressions;

namespace Desafio01.Classes;

internal class ValidadorDePlaca
{
    public static bool PlacaValida(string placa)
    {
        if (string.IsNullOrWhiteSpace(placa))
            return false;

        placa = placa.Trim().ToUpper();

        Regex regex = new Regex(@"^[A-Z]{3}[0-9]{4}$");

        return regex.IsMatch(placa);
    }
}
