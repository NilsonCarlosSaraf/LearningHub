using CashFlow.Communication.Requests;
using FluentValidation;

namespace CashFlow.Application.useCases.Expenses.Register;

public class RegisterExpenseValidator : AbstractValidator<RequestRegisterExpenseJson>
{
    public RegisterExpenseValidator()
    {
        RuleFor(expense => expense.Title).NotEmpty().WithMessage("Title is required.");
        RuleFor(expense => expense.Amount).GreaterThan(0).WithMessage("The amout must be greater than zero");
        RuleFor(expense => expense.Date).LessThanOrEqualTo(DateTime.UtcNow).WithMessage("The date must be less than or equal to the current date.");
        RuleFor(expense => expense.PaymentType).IsInEnum().WithMessage("The payment type is invalid.");

    }

}
