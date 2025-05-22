using CashFlow.Application.useCases.Expenses.Register;
using CashFlow.Communication.Requests;

namespace Validators.Test.Expenses.Register;

public class RegisterExpenseValidatorTests
{
    [Fact]
    public void Success()
    {
        //Arrange
        var validator = new RegisterExpenseValidator();
        var request = new RequestRegisterExpenseJson
        {
            Title = "Apple",
            Amount = 100,
            Description="Description",
            Date = DateTime.Now.AddDays(-1),
            PaymentType = CashFlow.Communication.Enums.PaymentType.CreditCard
        };
        //Act;
        var result = validator.Validate(request);

        //Assert
        Assert.True(result.IsValid);
    }
}
