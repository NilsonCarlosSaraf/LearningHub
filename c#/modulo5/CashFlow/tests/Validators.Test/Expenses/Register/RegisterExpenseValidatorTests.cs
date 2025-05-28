using CashFlow.Application.useCases.Expenses.Register;
using CommonTestUtilities.Requests;
using FluentAssertions;

namespace Validators.Test.Expenses.Register;

public class RegisterExpenseValidatorTests
{
//decorator that declares beginning of the test
    [Fact]
    public void Success()
    {
        //Arrange
        var validator = new RegisterExpenseValidator();
        var request = RequestRegisterExpenseJsonBuilder.Build();
        //Act;
        var result = validator.Validate(request);

        //Assert:
        result.IsValid.Should().BeTrue();


    }
}
