function deleteInvalids(arr){
    // [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
    // [1 , 2, -3]
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
// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))