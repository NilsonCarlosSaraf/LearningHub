using Bogus;
using CashFlow.Communication.Enums;
using CashFlow.Communication.Requests;

namespace CommonTestUtilities.Requests;

public class RequestRegisterExpenseJsonBuilder
{
    public static RequestRegisterExpenseJson Build()
    {
        return new Faker<RequestRegisterExpenseJson>()
            .RuleFor(x => x.Title, f => f.Commerce.Product())
            .RuleFor(x => x.Description, f => f.Commerce.ProductDescription())
            .RuleFor(x => x.Date, f => f.Date.Past())
            .RuleFor(x => x.Amount, f => f.Finance.Amount(min: 1, max: 1000))
            .RuleFor(x => x.PaymentType, f => f.PickRandom<PaymentType>());
    }
}

