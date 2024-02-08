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

function deleteInvalids(arr){
    let createNewArr = [];
    if(Array.isArray(arr) == false){
        return "Invalid Array";
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


function  password(obj){
    if(typeof obj == "object"){
        const keys = Object.keys(obj);
        const test =(obj.birthYear).toString().length;
        if(keys[0] == "name" && keys[1] == "birthYear" && keys[2] =="siteName" && keys.length === 3 && test == 4){
            const siteName = obj.siteName.toLocaleLowerCase()
            const capitalizeSiteName = siteName.charAt(0).toUpperCase()+siteName.slice(1)
            return capitalizeSiteName + "#" + obj.name + "@" + obj.birthYear;
        }else{
            return "invalid"
        }
        
    }else{
        return "please provide an object."
    }
}

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