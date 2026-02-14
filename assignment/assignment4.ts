 //Transactions array 
 let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

 let creditCount: number=0;
 let debitCount: number=0;
 let totalCredited : number=0;
 let totalDebited:number =0;
 let suspeciousCount:number=0;
 let balance: number =0;

 //transaction array 
 for (let i=0;i<transactions.length;i++)
 {
    let amount = transactions[i];

    if (amount >0)
    {
        creditCount++;
        totalCredited += amount;
    }
    else
        {
            debitCount++;
            totalDebited +=amount;   
        }
    
        balance += amount;
        
    if (amount > 10000 ||amount <-10000)
        {
           console.log("Suspecious transaction detected:  "+ amount);
           suspeciousCount++
        }
 }


        console.log("Total credits: " + creditCount + "(Sum: " + totalCredited +")");
        console.log("Total debits: " + debitCount + "(Sum: " + totalDebited +")");
        console.log("Final account balance :  "+ balance);
        console.log("TOTAL suspecios tarnsaction : " + suspeciousCount);