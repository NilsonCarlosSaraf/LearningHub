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
        var request = 
        //Act;
        var result = validator.Validate(request);

        //Assert
        Assert.True(result.IsValid);
    }
}
