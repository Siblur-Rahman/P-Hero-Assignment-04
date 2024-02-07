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
    if(typeof name !== "string"){
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
// Problem-3
function deleteInvalids(arr){
    // let arr = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
    // let arr = [1 , 2, -3]
    // {num: [ 1 , 2 , 3 ]}
    // ["1" , {num:2} , NaN ]
    let createNewArr = [];
    if(Array.isArray(arr) == false){
        return "It's not an array"
    }else{
        for( let item of arr){
            if(item == "NaN"){
                continue;
            }else if (typeof item == "number"){
                createNewArr.push(item);
            }
        }
    }
    if(createNewArr.includes(NaN) == 1){

        createNewArr.pop(NaN)
    }
    return createNewArr;
}
console.log(deleteInvalids(["1" , {num:2} , NaN ]))

// Problem-4

// Problem-5


