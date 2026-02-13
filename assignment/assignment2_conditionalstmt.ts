function  verifyEligibility(): void
{
    let customerName: string = "John Doe";
    let creditScore: number = 720;
    let income: number = 55000.0;
    let isEmployed: boolean = true;
    let debtToIncomeRatio: number = 35.0;


    let result: string;

    if (creditScore > 750) 
        {
        //loan Auto approval
        result = "Loan got automatically Approved";
        } 
         else if (creditScore >= 650 && creditScore <= 750) 
            {
                //Income check
              if (income >= 50000) 
                {
                   // Employment check
                 if (isEmployed) 
                    {
                      // check debt-to-income (DTI) ratio
                       if (debtToIncomeRatio < 40) 
                        {
                          result = "Loan got Approved in DTI ratio ";
                        } 
                       else {
                              result = "Loan Denied debt-to-income (DTI) ratio";
                            }
                  } 
                  //customer is unemployment
                  else{
                        result = "Loan Denied because customer is Unemployed";
                      }
                }else 
                   {
                    result = "Loan Denied because Insufficient Income";
                   }
            } 
    else 
        {
        // Credit score below 650
        result = "Loan Denied (Low Credit Score)";
        }

    console.log(`Customer: ${customerName} - ${result}`);
}

verifyEligibility();

