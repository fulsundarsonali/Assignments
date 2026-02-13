function verifyEligibility() {
    var customerName = "John Doe";
    var creditScore = 720;
    var income = 55000.0;
    var isEmployed = true;
    var debtToIncomeRatio = 35.0;
    var result;
    if (creditScore > 750) {
        //loan Auto approval
        result = "Loan got automatically Approved";
    }
    else if (creditScore >= 650 && creditScore <= 750) {
        //Income check
        if (income >= 50000) {
            // Employment check
            if (isEmployed) {
                // check debt-to-income (DTI) ratio
                if (debtToIncomeRatio < 40) {
                    result = "Loan got Approved in DTI ratio ";
                }
                else {
                    result = "Loan Denied debt-to-income (DTI) ratio";
                }
            }
            //customer is unemployment
            else {
                result = "Loan Denied because customer is Unemployed";
            }
        }
        else {
            result = "Loan Denied because Insufficient Income";
        }
    }
    else {
        // Credit score below 650
        result = "Loan Denied (Low Credit Score)";
    }
    console.log("Customer: ".concat(customerName, " - ").concat(result));
}
verifyEligibility();
