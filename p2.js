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
// console.log(checkName("salmaE"))