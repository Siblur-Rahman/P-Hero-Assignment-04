
function calculateMoney(quantity){
    const totalExpenditure = 500 + (50*8);
    if(quantity < 0){
        return "Input a positive Number!"
    }else if(quantity >= 0){
        const totalIncome = quantity * 120;
        const result = totalIncome - totalExpenditure;
        return result
    }
}
// console.log(calculateMoney(10))

