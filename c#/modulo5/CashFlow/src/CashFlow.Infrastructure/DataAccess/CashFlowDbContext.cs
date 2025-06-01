using CashFlow.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CashFlow.Infrastructure.DataAccess;

public class CashFlowDbContext : DbContext
{
    public DbSet<Expense> Expenses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "";

        var version = new Version(8, 0, 42);
        var serverVersion = new MySqlServerVersion(version); // Adjust version as needed

        optionsBuilder.UseMySql(connectionString, serverVersion);
    }
}
