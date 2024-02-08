
function calculateMoney(ticketQuantity){
    const totalExpenditure = 500 + (50*8);
    if(ticketQuantity < 0){
        return "Input a positive Number!"
    }else if(ticketQuantity >= 0){
        const totalIncome = ticketQuantity * 120;
        const result = totalIncome - totalExpenditure;
        return result
    }
}
// console.log(calculateMoney(10))

