function monthlySavings(arr, number){
    // const arr = [ 1000 , 2000 , 3000 ]
    if(Array.isArray(arr) === false || typeof number !== "number"){
        return "invalid input”";
    }else{
        let sum =0;
        for(let item of arr){
           sum += item
        }
        const saving = sum-number;
        if(saving >=0){
            return saving;
        }else{
            return "earn more"
        }
    }

}
// const arr = [ 1000 , 2000 , 3000 ]
// const arr = [ 1000 , 2000 , 2500 ]
const arr = [ 900 , 2700 , 3400]
// const arr = 12;
console.log(monthlySavings(arr, 10000))