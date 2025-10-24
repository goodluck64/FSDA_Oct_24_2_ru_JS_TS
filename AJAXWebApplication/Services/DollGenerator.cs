using AJAXWebApplication.Models;

namespace AJAXWebApplication.Services;

internal sealed class DollGenerator
{
    private static readonly string[] Names =
        ["Maksimilian", "Trahman", "Analbek", "Abbasali", "Rukablood", "Oleg", "Trusik"];

    private static readonly string[] Colors = ["White", "Black"];
    private static int _currentId = 0;

    public Doll Generate()
    {
        var currentId = _currentId++;
        var randomName = Names[Random.Shared.Next(0, Names.Length)];
        var randomColor = Colors[Random.Shared.Next(0, Colors.Length)];
        int randomPrice = randomColor == Colors[0] ? Random.Shared.Next(100, 1000) : Random.Shared.Next(0, 100);
        float randomHeight =
            randomColor == Colors[1] ? Random.Shared.NextSingle() * 25 : Random.Shared.NextSingle() * 15;
        
        return new Doll(currentId, randomName, randomColor, randomPrice, randomHeight);
    }
}