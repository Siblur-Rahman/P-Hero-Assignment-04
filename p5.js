function monthlySavings(totalIncome, livingCost){
    let taxAppliedAmount =0;
    if(Array.isArray(totalIncome) === false || typeof livingCost !== "number"){
        return "invalid input”";
    }else{
        let sum =0;
        for(let item of totalIncome){
           sum += item
           if(item >=3000){
            taxAppliedAmount +=item
           }
        }
        let tax = taxAppliedAmount * .2;
        let totalExpenditure = tax + livingCost
        const saving = sum - totalExpenditure
        if(saving >=0){
            return saving;
        }else{
            return "earn more"
        }
    }

}
console.log(monthlySavings([ 1000 , 3000 , 3000 ], 5200))