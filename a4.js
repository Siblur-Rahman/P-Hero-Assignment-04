// Problem-1
// function calculateMoney(quantity){
//     const totalExpenditure = 500 + (50*8);
//     if(quantity < 0){
//         return "Input a positive Number!"
//     }else if(quantity >= 0){
//         const totalIncome = quantity * 120;
//         const result = totalIncome - totalExpenditure;
//         return result
//     }
// }
// Problem-2
function checkName(name){
    const lastGoodCharacter = "ayieouw"
    if(typeof name !== "string" ){
        return "invalid"
    }else{
    const receivedName = name.toLocaleLowerCase()
    const lastCharacter = receivedName.charAt(receivedName.length-1);
    if(lastGoodCharacter.includes(lastCharacter) === true){
        return "Good Name”"
     }else{
         return "Bad Name"
     }
    }
}
// const receivedName = name.toLocaleLowerCase()
// const lastCharacter = receivedName.charAt(receivedName.length-1);
console.log(checkName("Salman"))
// Problem-3

// Problem-4

// Problem-5


