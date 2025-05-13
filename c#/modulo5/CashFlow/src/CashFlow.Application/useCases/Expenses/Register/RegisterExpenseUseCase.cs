using CashFlow.Communication.Enums;
using CashFlow.Communication.Requests;
using CashFlow.Communication.Responses;

namespace CashFlow.Application.useCases.Expenses.Register;

public class RegisterExpenseUseCase
{
    public ResponseRegisteredExpenseJson Execute(RequestRegisterExpenseJson request)
    {
        Validate(request);

        return new ResponseRegisteredExpenseJson();
    }

    private void Validate(RequestRegisterExpenseJson request)
    {
        var titlesIsEmpty = string.IsNullOrWhiteSpace(request.Title);
        if (titlesIsEmpty)
        { 
            throw new ArgumentException("Title is required");
        }

        if (request.Amount <= 0)
        {
            throw new ArgumentException("Amount must be greater than zero");
        }

        var result = DateTime.Compare(request.Date,DateTime.UtcNow);
        if (result > 0)
        {
            throw new ArgumentException("Expenses cannot be for the future");
        }

        var paymentTypeIsValid = Enum.IsDefined(typeof(PaymentType), request.PaymentType);

        if (paymentTypeIsValid == false)
        {
            throw new ArgumentException("Payment type not valid");
        }
    }
}
